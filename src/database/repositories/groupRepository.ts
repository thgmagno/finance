import { Group } from '@prisma/client'
import { prisma } from '@/database/prisma'
import { nanoid } from 'nanoid'

export async function create(
  group: Pick<Group, 'name' | 'creatorUserId' | 'description' | 'visibility'>,
) {
  try {
    const tag = await generateUniqueTag()
    return await prisma.group.create({ data: { ...group, tag } })
  } catch {
    throw new Error('Não foi possível criar o grupo')
  }
}

export async function edit(
  data: Partial<Group>,
  creatorUserId: string,
  groupId: string,
) {
  try {
    return await prisma.group.updateMany({
      where: {
        id: groupId,
        creatorUserId,
      },
      data,
    })
  } catch {
    throw new Error('Não foi possível editar o grupo')
  }
}

export async function destroy(groupId: string, creatorUserId: string) {
  try {
    return await prisma.group.deleteMany({
      where: {
        id: groupId,
        creatorUserId,
      },
    })
  } catch {
    throw new Error('Não foi possível excluir o grupo')
  }
}

export async function listMembers(groupId: string) {
  try {
    return await prisma.groupMember.findMany({
      where: { groupId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })
  } catch {
    throw new Error('Não foi possível listar os membros do grupo')
  }
}

export async function findUnique(searchTerm: string) {
  try {
    return await prisma.group.findFirst({
      where: {
        visibility: 'PUBLIC',
        OR: [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { tag: { equals: searchTerm } },
        ],
      },
    })
  } catch {
    throw new Error('Não foi possível buscar o grupo')
  }
}

async function generateUniqueTag(): Promise<string> {
  let tagUnica = ''
  let tagExiste = true

  while (tagExiste) {
    tagUnica = nanoid(4)
      .replace(/[^A-Z0-9]/g, '')
      .toUpperCase()
    const tagExistente = await prisma.group.findUnique({
      where: { tag: tagUnica },
    })

    tagExiste = !!tagExistente
  }

  return tagUnica
}
