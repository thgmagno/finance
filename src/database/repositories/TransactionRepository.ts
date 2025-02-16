import { TransactionDTO } from '@/database/dtos/TransactionDTO'

export class TransactionRepository {
  private transactions: TransactionDTO[] = []

  create(transaction: TransactionDTO): void {
    this.transactions.push(transaction)
  }

  edit(id: string, transaction: TransactionDTO): void {
    const index = this.transactions.findIndex((t) => t.getId() === id)
    if (index !== -1) {
      this.transactions[index] = transaction
    }
  }

  delete(id: string): void {
    this.transactions = this.transactions.filter((t) => t.getId() !== id)
  }

  getDetails(id: string): TransactionDTO | undefined {
    return this.transactions.find((t) => t.getId() === id)
  }

  findAll(): TransactionDTO[] {
    return this.transactions
  }
}
