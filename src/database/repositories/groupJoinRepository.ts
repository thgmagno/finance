import { GroupJoinRequest, GroupJoinRequestStatus } from '@prisma/client'
import { prisma } from '@/database/prisma'

export async function requestEntry(request: GroupJoinRequest) {
  try {
    return await prisma.groupJoinRequest.create({ data: request })
  } catch {
    throw new Error('Não foi possível solicitar a entrada no grupo')
  }
}

export async function approveRequest(requestId: string) {
  try {
    return await prisma.groupJoinRequest.update({
      where: { id: requestId },
      data: { status: 'APPROVED' },
    })
  } catch {
    throw new Error('Não foi possível aprovar a solicitação')
  }
}

export async function rejectRequest(requestId: string) {
  try {
    return await prisma.groupJoinRequest.update({
      where: { id: requestId },
      data: { status: 'REJECTED' },
    })
  } catch {
    throw new Error('Não foi possível rejeitar a solicitação')
  }
}

export async function findAll(
  status?: GroupJoinRequestStatus,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.groupJoinRequest.findMany({
      where: {
        groupId,
        status,
        userId,
      },
      orderBy: {
        requestDate: 'desc',
      },
    })
  } catch {
    throw new Error('Não foi possível buscar as solicitações')
  }
}
