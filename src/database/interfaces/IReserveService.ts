import { ReserveDTO } from '@/database/dtos/ReserveDTO'

export interface IReserveService {
  create(reserve: ReserveDTO): void
  edit(id: string, reserve: ReserveDTO): void
  delete(id: string): void
  getDetails(id: string): ReserveDTO | undefined
  findAll(): ReserveDTO[]
}
