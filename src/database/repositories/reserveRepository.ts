import { prisma } from '@/database/prisma'
import { Reserve, Transaction } from '@prisma/client'

interface CreateReservation {
  transaction: Omit<Transaction, 'id' | 'type'>
  reserve: Pick<Reserve, 'startDate' | 'status'> &
    Partial<Pick<Reserve, 'endDate' | 'yield'>>
}

interface FindAllParameters {
  orderBy?: string
  order?: 'asc' | 'desc'
  creationDateFrom?: Date
  creationDateTo?: Date
  startDateFrom?: Date
  startDateTo?: Date
  endDateFrom?: Date
  endDateTo?: Date
  userId?: string
  groupId?: string
}

export async function create(params: CreateReservation) {
  try {
    const [transaction] = await prisma.$transaction([
      prisma.transaction.create({
        data: {
          type: 'RESERVATION',
          amount: params.transaction.amount ?? 0,
          categoryId: params.transaction.categoryId,
          description: params.transaction.description ?? '-',
          groupId: params.transaction.groupId,
          userId: params.transaction.userId,
        },
      }),
      prisma.reserve.create({
        data: {
          startDate: params.reserve.startDate,
          status: params.reserve.status,
          yield: params.reserve.yield ?? 0,
          endDate: params.reserve.endDate,
          transactionId: undefined,
        },
      }),
    ])

    await prisma.reserve.update({
      where: { id: transaction.id },
      data: { transactionId: transaction.id },
    })
  } catch {
    throw new Error('Não foi possível criar a reserva')
  }
}

export async function edit(
  reserveId: string,
  data: Partial<Reserve>,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.reserve.update({
      where: {
        id: reserveId,
        AND: [{ OR: [{ transaction: { userId, groupId } }] }],
      },
      data,
    })
  } catch {
    throw new Error('Não foi possível editar a reserva')
  }
}

export async function findUnique(
  reserveId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.reserve.findUnique({
      where: {
        id: reserveId,
        AND: [{ OR: [{ transaction: { userId, groupId } }] }],
      },
    })
  } catch {
    throw new Error('Não foi possível buscar a reserva')
  }
}

export async function findAll(params: FindAllParameters) {
  try {
    return await prisma.transaction.findMany({
      where: {
        OR: [{ userId: params.userId }, { groupId: params.groupId }],
        creationDate: {
          gte: params.creationDateFrom || undefined,
          lte: params.creationDateTo || undefined,
        },
      },
      include: {
        reserves: {
          where: {
            OR: [
              {
                startDate: {
                  gte: params.startDateFrom || undefined,
                  lte: params.startDateTo || undefined,
                },
                endDate: {
                  gte: params.endDateFrom || undefined,
                  lte: params.endDateTo || undefined,
                },
              },
            ],
          },
        },
      },
      orderBy: {
        [params.orderBy ?? 'description']: params.order ?? 'asc',
      },
    })
  } catch {
    throw new Error('Não foi possível buscar as reservas')
  }
}

export async function destroy(
  reserveId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    const reserve = await findUnique(reserveId, userId, groupId)

    if (!reserve?.transactionId) {
      throw new Error('Reserva não encontrada')
    }

    return prisma.$transaction([
      prisma.reserve.delete({
        where: {
          id: reserveId,
          AND: [{ OR: [{ transaction: { userId, groupId } }] }],
        },
      }),
      prisma.transaction.delete({
        where: { id: reserve.transactionId },
      }),
    ])
  } catch {
    throw new Error('Não foi possível deletar a reserva')
  }
}
