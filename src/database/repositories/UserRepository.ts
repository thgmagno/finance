import { UserDTO } from '../dtos/UserDTO'

export class UserRepository {
  private users: UserDTO[] = []

  create(user: UserDTO): void {
    this.users.push(user)
  }

  edit(id: string, user: UserDTO): void {
    const index = this.users.findIndex((u) => u.getId() === id)
    if (index !== -1) {
      this.users[index] = user
    }
  }

  delete(id: string): void {
    this.users = this.users.filter((u) => u.getId() !== id)
  }

  getDetails(id: string): UserDTO | undefined {
    return this.users.find((u) => u.getId() === id)
  }

  findAll(): UserDTO[] {
    return this.users
  }
}
