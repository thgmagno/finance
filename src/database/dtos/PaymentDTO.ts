export class PaymentDTO {
  constructor(
    private readonly id: string,
    private readonly transactionId: string,
    private readonly dueDate: Date,
    private readonly amountPaid: number,
  ) {}

  getId(): string {
    return this.id
  }

  getTransactionId(): string {
    return this.transactionId
  }

  getDueDate(): Date {
    return this.dueDate
  }

  getAmountPaid(): number {
    return this.amountPaid
  }
}
