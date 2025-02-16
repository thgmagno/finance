import { FeedbackDTO } from '../dtos/FeedbackDTO'

export class FeedbackRepository {
  private feedbacks: FeedbackDTO[] = []

  create(feedback: FeedbackDTO): void {
    this.feedbacks.push(feedback)
  }

  edit(id: string, feedback: FeedbackDTO): void {
    const index = this.feedbacks.findIndex((fb) => fb.getId() === id)
    if (index !== -1) {
      this.feedbacks[index] = feedback
    }
  }

  delete(id: string): void {
    this.feedbacks = this.feedbacks.filter((fb) => fb.getId() !== id)
  }

  getDetails(id: string): FeedbackDTO | undefined {
    return this.feedbacks.find((fb) => fb.getId() === id)
  }

  findAll(): FeedbackDTO[] {
    return this.feedbacks
  }
}
