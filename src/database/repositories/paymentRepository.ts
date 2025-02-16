import { prisma } from '@/database/prisma'
import { Transaction, Payment } from '@prisma/client'
import { Omit } from '@prisma/client/runtime/library'

interface CreatePayment {
  transaction: Omit<Transaction, 'id' | 'type'>
  payment: Omit<Payment, 'id' | 'transactionId' | 'transaction'>
}

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

export async function create(params: CreatePayment) {
  try {
    const [transaction] = await prisma.$transaction([
      prisma.transaction.create({
        data: {
          type: 'PAYMENT',
          amount: params.transaction.amount ?? 0,
          categoryId: params.transaction.categoryId,
          description: params.transaction.description ?? '-',
          groupId: params.transaction.groupId,
          userId: params.transaction.userId,
        },
      }),
      prisma.payment.create({
        data: {
          dueDate: params.payment.dueDate,
          amountPaid: params.payment.amountPaid,
          status: params.payment.status,
          paymentMethod: params.payment.paymentMethod,
          transactionId: undefined,
        },
      }),
    ])

    await prisma.payment.update({
      where: { id: transaction.id },
      data: { transactionId: transaction.id },
    })
  } catch {
    throw new Error('Não foi possível criar o pagamento')
  }
}

export async function edit(
  paymentId: string,
  data: Partial<Payment>,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.payment.update({
      where: {
        id: paymentId,
        AND: [{ OR: [{ transaction: { userId, groupId } }] }],
      },
      data,
    })
  } catch {
    throw new Error('Não foi possível editar o pagamento')
  }
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

export async function destroy(
  paymentId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    const payment = await findUnique(paymentId, userId, groupId)

    if (!payment?.transactionId) {
      throw new Error('Pagamento não encontrado')
    }

    return prisma.$transaction([
      prisma.payment.delete({
        where: {
          id: paymentId,
          AND: [{ OR: [{ transaction: { userId, groupId } }] }],
        },
      }),
      prisma.transaction.delete({
        where: { id: payment.transactionId },
      }),
    ])
  } catch {
    throw new Error('Não foi possível deletar o pagamento')
  }
}
