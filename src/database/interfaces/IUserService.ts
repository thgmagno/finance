import { UserDTO } from '@/database/dtos/UserDTO'

export interface IUserService {
  create(user: UserDTO): void
  edit(id: string, user: UserDTO): void
  delete(id: string): void
  getDetails(id: string): UserDTO | undefined
}
