import { ReceiptMethodType } from '@/database/enums/transactions'

export class ReceiptDTO {
  constructor(
    private readonly id: string,
    private readonly transactionId: string,
    private readonly receiptDate: Date,
    private readonly amountReceived: number,
    private readonly receiptMethod: ReceiptMethodType,
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

  getReceiptMethod(): ReceiptMethodType {
    return this.receiptMethod
  }
}
