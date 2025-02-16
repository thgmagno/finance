import { prisma } from '@/database/prisma'
import { Transaction, Receipt } from '@prisma/client'

interface CreateReceipt {
  transaction: Omit<Transaction, 'id' | 'type'>
  receipt: Omit<Receipt, 'id' | 'transactionId' | 'transaction'>
}

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

export async function create(params: CreateReceipt) {
  try {
    const [transaction] = await prisma.$transaction([
      prisma.transaction.create({
        data: {
          type: 'RECEIPT',
          amount: params.transaction.amount ?? 0,
          categoryId: params.transaction.categoryId,
          description: params.transaction.description ?? '-',
          groupId: params.transaction.groupId,
          userId: params.transaction.userId,
        },
      }),
      prisma.receipt.create({
        data: {
          receiptDate: params.receipt.receiptDate,
          amountReceived: params.receipt.amountReceived,
          status: params.receipt.status,
          receiptMethod: params.receipt.receiptMethod,
          transactionId: undefined,
        },
      }),
    ])

    await prisma.receipt.update({
      where: { id: transaction.id },
      data: { transactionId: transaction.id },
    })
  } catch {
    throw new Error('Não foi possível criar o recebimento')
  }
}

export async function edit(
  receiptId: string,
  data: Partial<Receipt>,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.receipt.update({
      where: {
        id: receiptId,
        AND: [{ OR: [{ transaction: { userId, groupId } }] }],
      },
      data,
    })
  } catch {
    throw new Error('Não foi possível editar o recebimento')
  }
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

export async function destroy(
  receiptId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    const receipt = await findUnique(receiptId, userId, groupId)

    if (!receipt?.transactionId) {
      throw new Error('Recebimento não encontrado')
    }

    return prisma.$transaction([
      prisma.receipt.delete({
        where: {
          id: receiptId,
          AND: [{ OR: [{ transaction: { userId, groupId } }] }],
        },
      }),
      prisma.transaction.delete({
        where: { id: receipt.transactionId },
      }),
    ])
  } catch {
    throw new Error('Não foi possível deletar o recebimento')
  }
}
