import { TransactionDTO } from '@/database/dtos/TransactionDTO'

export interface ITransactionService {
  create(transaction: TransactionDTO): void
  edit(id: string, transaction: TransactionDTO): void
  delete(id: string): void
  getDetails(id: string): TransactionDTO | undefined
  findAll(): TransactionDTO[]
}
