import { GroupJoinRequestDTO } from '@/database/dtos/GroupJoinRequestDTO'
import { IGroupJoinRequestService } from '../interfaces/IGroupJoinRequestService'
import { GroupJoinRequestRepository } from '../repositories/GroupJoinRequestRepository'

export class GroupJoinRequestService implements IGroupJoinRequestService {
  private repository = new GroupJoinRequestRepository()

  create(groupJoinRequest: GroupJoinRequestDTO): void {
    this.repository.create(groupJoinRequest)
  }

  edit(id: string, groupJoinRequest: GroupJoinRequestDTO): void {
    this.repository.edit(id, groupJoinRequest)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): GroupJoinRequestDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): GroupJoinRequestDTO[] {
    return this.repository.findAll()
  }
}
