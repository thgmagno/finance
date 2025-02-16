import { FeedbackDTO } from '@/database/dtos/FeedbackDTO'

export interface IFeedbackService {
  create(feedback: FeedbackDTO): void
  edit(id: string, feedback: FeedbackDTO): void
  delete(id: string): void
  getDetails(id: string): FeedbackDTO | undefined
  findAll(): FeedbackDTO[]
}
