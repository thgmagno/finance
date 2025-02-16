import { Feedback, FeedbackStatus } from '@prisma/client'
import { prisma } from '@/database/prisma'

export async function send(feedback: Feedback) {
  try {
    return await prisma.feedback.create({ data: feedback })
  } catch {
    throw new Error('Não foi possível enviar o feedback')
  }
}

export async function changeStatus(feedbackId: string, status: FeedbackStatus) {
  try {
    return await prisma.feedback.update({
      where: { id: feedbackId },
      data: { status },
    })
  } catch {
    throw new Error('Não foi possível alterar o status do feedback')
  }
}

export async function findUnique(feedbackId: string) {
  try {
    return await prisma.feedback.findUnique({ where: { id: feedbackId } })
  } catch {
    throw new Error('Não foi possível buscar o feedback')
  }
}

export async function findAll(status?: FeedbackStatus) {
  try {
    return await prisma.feedback.findMany({
      where: { status },
      orderBy: { creationDate: 'desc' },
    })
  } catch {
    throw new Error('Não foi possível buscar os feedbacks')
  }
}
