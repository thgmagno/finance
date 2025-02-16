import { UserDTO } from '@/database/dtos/UserDTO'
import { IUserService } from '../interfaces/IUserService'
import { UserRepository } from '../repositories/UserRepository'

export class UserService implements IUserService {
  private repository = new UserRepository()

  create(user: UserDTO): void {
    this.repository.create(user)
  }

  edit(id: string, user: UserDTO): void {
    this.repository.edit(id, user)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): UserDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): UserDTO[] {
    return this.repository.findAll()
  }
}
