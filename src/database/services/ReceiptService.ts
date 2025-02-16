import { ReceiptDTO } from '@/database/dtos/ReceiptDTO'
import { IReceiptService } from '../interfaces/IReceiptService'
import { ReceiptRepository } from '../repositories/ReceiptRepository'

export class ReceiptService implements IReceiptService {
  private repository = new ReceiptRepository()

  create(receipt: ReceiptDTO): void {
    this.repository.create(receipt)
  }

  edit(id: string, receipt: ReceiptDTO): void {
    this.repository.edit(id, receipt)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): ReceiptDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): ReceiptDTO[] {
    return this.repository.findAll()
  }
}
