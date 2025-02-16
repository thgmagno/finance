import { ReserveDTO } from '../dtos/ReserveDTO'

export class ReserveRepository {
  private reserves: ReserveDTO[] = []

  create(reserve: ReserveDTO): void {
    this.reserves.push(reserve)
  }

  edit(id: string, reserve: ReserveDTO): void {
    const index = this.reserves.findIndex((r) => r.getId() === id)
    if (index !== -1) {
      this.reserves[index] = reserve
    }
  }

  delete(id: string): void {
    this.reserves = this.reserves.filter((r) => r.getId() !== id)
  }

  getDetails(id: string): ReserveDTO | undefined {
    return this.reserves.find((r) => r.getId() === id)
  }

  findAll(): ReserveDTO[] {
    return this.reserves
  }
}
