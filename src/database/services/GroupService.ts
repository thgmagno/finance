import { GroupDTO } from '@/database/dtos/GroupDTO'
import { IGroupService } from '../interfaces/IGroupService'
import { GroupRepository } from '../repositories/GroupRepository'

export class GroupService implements IGroupService {
  private repository = new GroupRepository()

  create(group: GroupDTO): void {
    this.repository.create(group)
  }

  edit(id: string, group: GroupDTO): void {
    this.repository.edit(id, group)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): GroupDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): GroupDTO[] {
    return this.repository.findAll()
  }
}
