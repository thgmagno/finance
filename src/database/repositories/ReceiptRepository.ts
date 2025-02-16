import { ReceiptDTO } from '@/database/dtos/ReceiptDTO'

export class ReceiptRepository {
  private receipts: ReceiptDTO[] = []

  create(receipt: ReceiptDTO): void {
    this.receipts.push(receipt)
  }

  edit(id: string, receipt: ReceiptDTO): void {
    const index = this.receipts.findIndex((r) => r.getId() === id)
    if (index !== -1) {
      this.receipts[index] = receipt
    }
  }

  delete(id: string): void {
    this.receipts = this.receipts.filter((r) => r.getId() !== id)
  }

  getDetails(id: string): ReceiptDTO | undefined {
    return this.receipts.find((r) => r.getId() === id)
  }

  findAll(): ReceiptDTO[] {
    return this.receipts
  }
}
