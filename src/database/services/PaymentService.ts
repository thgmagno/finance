import { PaymentDTO } from '@/database/dtos/PaymentDTO'
import { IPaymentService } from '../interfaces/IPaymentService'
import { PaymentRepository } from '../repositories/PaymentRepository'

export class PaymentService implements IPaymentService {
  private repository = new PaymentRepository()

  create(payment: PaymentDTO): void {
    this.repository.create(payment)
  }

  edit(id: string, payment: PaymentDTO): void {
    this.repository.edit(id, payment)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): PaymentDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): PaymentDTO[] {
    return this.repository.findAll()
  }
}
