import { Category, CategoryType } from '@prisma/client'
import { prisma } from '@/database/prisma'

export async function create(category: Category) {
  try {
    return await prisma.category.create({ data: category })
  } catch {
    throw new Error('Não foi possível criar a categoria')
  }
}

export async function edit(data: Partial<Category>) {
  try {
    return await prisma.category.update({
      where: {
        id: data.id,
        AND: { OR: [{ userId: data.userId }, { groupId: data.groupId }] },
      },
      data,
    })
  } catch {
    throw new Error('Não foi possível editar a categoria')
  }
}

export async function destroy(
  categoryId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.category.delete({
      where: { id: categoryId, AND: { OR: [{ userId }, { groupId }] } },
    })
  } catch {
    throw new Error('Não foi possível deletar a categoria')
  }
}

export async function findUnique(
  categoryId: string,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.category.findUnique({
      where: { id: categoryId, AND: { OR: [{ userId }, { groupId }] } },
    })
  } catch {
    throw new Error('Não foi possível buscar a categoria')
  }
}

export async function findAll(
  type?: CategoryType,
  userId?: string,
  groupId?: string,
) {
  try {
    return await prisma.category.findMany({
      where: {
        type,
        AND: {
          OR: [{ userId }, { groupId }],
        },
      },
      orderBy: {
        name: 'asc',
      },
    })
  } catch {
    throw new Error('Não foi possível buscar as categorias')
  }
}
