import { prisma } from '@/database/prisma'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function deactivateAccount(userId: string) {
  try {
    await prisma.$transaction([
      prisma.category.deleteMany({ where: { userId } }),
      prisma.group.deleteMany({ where: { creatorUserId: userId } }),
      prisma.transaction.deleteMany({ where: { userId } }),
      prisma.session.deleteMany({ where: { userId } }),
      prisma.groupInvitation.deleteMany({ where: { userId } }),
      prisma.groupJoinRequest.deleteMany({ where: { userId } }),
      prisma.groupMember.deleteMany({ where: { userId } }),
      prisma.notification.deleteMany({ where: { userId } }),
      prisma.user.update({ where: { id: userId }, data: { active: false } }),
    ])
  } catch {
    throw new Error('Não foi possível desativar a conta')
  }
}

export async function signOut(userId: string) {
  try {
    await prisma.session.deleteMany({
      where: { userId },
    })

    const cookieStore = await cookies()
    cookieStore.delete('auth.session-token')
  } catch {
    throw new Error('Não foi possível sair da conta')
  }

  redirect('/entrar')
}
