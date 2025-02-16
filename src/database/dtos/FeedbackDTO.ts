import { FeedbackStatus, FeedbackType } from '../enums/users'

export class FeedbackDTO {
  constructor(
    private readonly id: string,
    private readonly userId: string,
    private readonly message: string,
    private readonly creationDate: Date,
    private readonly type: FeedbackType,
    private readonly status: FeedbackStatus,
  ) {}

  getId(): string {
    return this.id
  }

  getUserId(): string {
    return this.userId
  }

  getMessage(): string {
    return this.message
  }

  getCreationDate(): Date {
    return this.creationDate
  }

  getType(): FeedbackType {
    return this.type
  }

  getStatus(): FeedbackStatus {
    return this.status
  }
}
