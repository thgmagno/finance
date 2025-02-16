import { TransactionDTO } from '@/database/dtos/TransactionDTO'
import { ITransactionService } from '../interfaces/ITransactionService'
import { TransactionRepository } from '../repositories/TransactionRepository'

export class TransactionService implements ITransactionService {
  private repository = new TransactionRepository()

  create(transaction: TransactionDTO): void {
    this.repository.create(transaction)
  }

  edit(id: string, transaction: TransactionDTO): void {
    this.repository.edit(id, transaction)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): TransactionDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): TransactionDTO[] {
    return this.repository.findAll()
  }
}
