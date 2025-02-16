import { prisma } from '@/database/prisma'

interface FindAllParameters {
  orderBy: 'description' | 'creationDate' | 'amount'
  order: 'asc' | 'desc'
  creationDateFrom?: Date
  creationDateTo?: Date
  dueDateFrom?: Date
  dueDateTo?: Date
  userId?: string
  groupId?: string
}

export async function confirm(
  paymentId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.payment.update({
      where: {
        id: paymentId,
        AND: { OR: [{ transaction: { userId, groupId } }] },
      },
      data: { status: 'PAID' },
    })
  } catch {
    throw new Error('Não foi possível confirmar o pagamento')
  }
}

export async function cancel(
  paymentId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.payment.update({
      where: {
        id: paymentId,
        AND: { OR: [{ transaction: { userId, groupId } }] },
      },
      data: { status: 'CANCELLED' },
    })
  } catch {
    throw new Error('Não foi possível cancelar o pagamento')
  }
}

export async function findUnique(
  paymentId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.payment.findUnique({
      where: {
        id: paymentId,
        AND: { OR: [{ transaction: { userId, groupId } }] },
      },
    })
  } catch {
    throw new Error('Não foi possível buscar o pagamento')
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
        payments: {
          where: {
            dueDate: {
              gte: params.dueDateFrom || undefined,
              lte: params.dueDateTo || undefined,
            },
          },
        },
      },
      orderBy: {
        [params.orderBy ?? 'description']: params.order ?? 'asc',
      },
    })
  } catch {
    throw new Error('Não foi possível buscar os pagamentos')
  }
}
