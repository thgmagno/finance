import { ReceiptDTO } from '@/database/dtos/ReceiptDTO'

export interface IReceiptService {
  create(receipt: ReceiptDTO): void
  edit(id: string, receipt: ReceiptDTO): void
  delete(id: string): void
  getDetails(id: string): ReceiptDTO | undefined
  findAll(): ReceiptDTO[]
}
