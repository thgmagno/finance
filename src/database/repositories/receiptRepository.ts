import { prisma } from '@/database/prisma'

interface FindAllParameters {
  orderBy: 'description' | 'creationDate' | 'amount'
  order: 'asc' | 'desc'
  creationDateFrom?: Date
  creationDateTo?: Date
  receiptDateFrom?: Date
  receiptDateTo?: Date
  userId?: string
  groupId?: string
}

export async function confirm(
  receiptId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.receipt.update({
      where: {
        id: receiptId,
        AND: { OR: [{ transaction: { userId, groupId } }] },
      },
      data: { status: 'RECEIVED' },
    })
  } catch {
    throw new Error('Não foi possível confirmar o recibo')
  }
}

export async function cancel(
  receiptId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.receipt.update({
      where: {
        id: receiptId,
        AND: { OR: [{ transaction: { userId, groupId } }] },
      },
      data: { status: 'CANCELLED' },
    })
  } catch {
    throw new Error('Não foi possível cancelar o recibo')
  }
}

export async function findUnique(
  receiptId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.receipt.findUnique({
      where: {
        id: receiptId,
        AND: { OR: [{ transaction: { userId, groupId } }] },
      },
    })
  } catch {
    throw new Error('Não foi possível buscar o recibo')
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
        receipts: {
          where: {
            receiptDate: {
              gte: params.receiptDateFrom || undefined,
              lte: params.receiptDateTo || undefined,
            },
          },
        },
      },
      orderBy: {
        [params.orderBy ?? 'description']: params.order ?? 'asc',
      },
    })
  } catch {
    throw new Error('Não foi possível buscar os recibos')
  }
}
