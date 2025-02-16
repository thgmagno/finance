import { GroupInvitation, GroupInvitationStatus } from '@prisma/client'
import { prisma } from '@/database/prisma'

export async function sendInvitation(invitation: GroupInvitation) {
  try {
    return await prisma.groupInvitation.create({ data: invitation })
  } catch {
    throw new Error('Não foi possível enviar o convite')
  }
}

export async function acceptInvitation(invitationId: string) {
  try {
    return await prisma.groupInvitation.update({
      where: { id: invitationId },
      data: { status: 'ACCEPTED' },
    })
  } catch {
    throw new Error('Não foi possível aceitar o convite')
  }
}

export async function declineInvitation(invitationId: string) {
  try {
    return await prisma.groupInvitation.update({
      where: { id: invitationId },
      data: { status: 'REJECTED' },
    })
  } catch {
    throw new Error('Não foi possível recusar o convite')
  }
}

export async function findAll(
  groupId?: string,
  status?: GroupInvitationStatus,
) {
  try {
    return await prisma.groupInvitation.findMany({
      where: { groupId, status },
      orderBy: { sendDate: 'desc' },
    })
  } catch {
    throw new Error('Não foi possível buscar os convites')
  }
}
