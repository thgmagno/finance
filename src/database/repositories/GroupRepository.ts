import { GroupDTO } from '@/database/dtos/GroupDTO'

export class GroupRepository {
  private groups: GroupDTO[] = []

  create(group: GroupDTO): void {
    this.groups.push(group)
  }

  edit(id: string, group: GroupDTO): void {
    const index = this.groups.findIndex((g) => g.getId() === id)
    if (index !== -1) {
      this.groups[index] = group
    }
  }

  delete(id: string): void {
    this.groups = this.groups.filter((g) => g.getId() !== id)
  }

  getDetails(id: string): GroupDTO | undefined {
    return this.groups.find((g) => g.getId() === id)
  }

  findAll(): GroupDTO[] {
    return this.groups
  }
}
