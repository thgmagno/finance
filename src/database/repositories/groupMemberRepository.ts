import { RoleType } from '@prisma/client'
import { prisma } from '@/database/prisma'

export async function removeMember(memberId: string, groupId?: string) {
  try {
    return await prisma.groupMember.deleteMany({
      where: { id: memberId, groupId },
    })
  } catch {
    throw new Error('Não foi possível remover o membro')
  }
}

export async function changeRole(
  memberId: string,
  role: RoleType,
  groupId: string,
) {
  try {
    return await prisma.groupMember.updateMany({
      where: { id: memberId, groupId },
      data: { role },
    })
  } catch {
    throw new Error('Não foi possível alterar o cargo do membro')
  }
}

export async function leaveGroup(userId: string, groupId?: string) {
  try {
    return await prisma.groupMember.deleteMany({
      where: { userId, groupId },
    })
  } catch {
    throw new Error('Não foi possível sair do grupo')
  }
}

export async function findAll(userId: string, groupId: string) {
  try {
    return await prisma.groupMember.findMany({
      where: { groupId, userId },
      orderBy: { user: { name: 'asc' } },
    })
  } catch {
    throw new Error('Não foi possível buscar os membros')
  }
}
