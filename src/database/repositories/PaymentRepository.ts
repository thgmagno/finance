import { PaymentDTO } from '../dtos/PaymentDTO'

export class PaymentRepository {
  private payments: PaymentDTO[] = []

  create(payment: PaymentDTO): void {
    this.payments.push(payment)
  }

  edit(id: string, payment: PaymentDTO): void {
    const index = this.payments.findIndex((p) => p.getId() === id)
    if (index !== -1) {
      this.payments[index] = payment
    }
  }

  delete(id: string): void {
    this.payments = this.payments.filter((p) => p.getId() !== id)
  }

  getDetails(id: string): PaymentDTO | undefined {
    return this.payments.find((p) => p.getId() === id)
  }

  findAll(): PaymentDTO[] {
    return this.payments
  }
}
