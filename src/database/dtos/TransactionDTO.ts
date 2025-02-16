import { TransactionType } from '@/database/enums/transactions'

export class TransactionDTO {
  constructor(
    private readonly id: string,
    private readonly userId: string,
    private readonly categoryId: string,
    private readonly amount: number,
    private readonly creationDate: Date,
    private readonly description: string,
    private readonly type: TransactionType,
  ) {}

  getId(): string {
    return this.id
  }

  getUserId(): string {
    return this.userId
  }

  getCategoryId(): string {
    return this.categoryId
  }

  getAmount(): number {
    return this.amount
  }

  getCreationDate(): Date {
    return this.creationDate
  }

  getDescription(): string {
    return this.description
  }

  getType(): TransactionType {
    return this.type
  }
}
