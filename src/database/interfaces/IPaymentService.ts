import { PaymentDTO } from '@/database/dtos/PaymentDTO'

export interface IPaymentService {
  create(payment: PaymentDTO): void
  edit(id: string, payment: PaymentDTO): void
  delete(id: string): void
  getDetails(id: string): PaymentDTO | undefined
  findAll(): PaymentDTO[]
}
