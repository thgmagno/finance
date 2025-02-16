import { FeedbackDTO } from '../dtos/FeedbackDTO'
import { IFeedbackService } from '../interfaces/IFeedbackService'
import { FeedbackRepository } from '../repositories/FeedbackRepository'

export class FeedbackService implements IFeedbackService {
  private repository = new FeedbackRepository()

  create(feedback: FeedbackDTO): void {
    this.repository.create(feedback)
  }

  edit(id: string, feedback: FeedbackDTO): void {
    this.repository.edit(id, feedback)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): FeedbackDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): FeedbackDTO[] {
    return this.repository.findAll()
  }
}
