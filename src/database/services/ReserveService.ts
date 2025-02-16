import { ReserveDTO } from '../dtos/ReserveDTO'
import { IReserveService } from '../interfaces/IReserveService'
import { ReserveRepository } from '../repositories/ReserveRepository'

export class ReserveService implements IReserveService {
  private repository = new ReserveRepository()

  create(reserve: ReserveDTO): void {
    this.repository.create(reserve)
  }

  edit(id: string, reserve: ReserveDTO): void {
    this.repository.edit(id, reserve)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): ReserveDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): ReserveDTO[] {
    return this.repository.findAll()
  }
}
