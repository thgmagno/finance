export class ReceiptDTO {
  constructor(
    private readonly id: string,
    private readonly transactionId: string,
    private readonly receiptDate: Date,
    private readonly amountReceived: number,
  ) {}

  getId(): string {
    return this.id
  }

  getTransactionId(): string {
    return this.transactionId
  }

  getReceiptDate(): Date {
    return this.receiptDate
  }

  getAmountReceived(): number {
    return this.amountReceived
  }
}
