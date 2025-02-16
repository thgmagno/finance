import { GroupJoinRequestDTO } from '@/database/dtos/GroupJoinRequestDTO'

export class GroupJoinRequestRepository {
  private groupJoinRequests: GroupJoinRequestDTO[] = []

  create(groupJoinRequest: GroupJoinRequestDTO): void {
    this.groupJoinRequests.push(groupJoinRequest)
  }

  edit(id: string, groupJoinRequest: GroupJoinRequestDTO): void {
    const index = this.groupJoinRequests.findIndex((gjr) => gjr.getId() === id)
    if (index !== -1) {
      this.groupJoinRequests[index] = groupJoinRequest
    }
  }

  delete(id: string): void {
    this.groupJoinRequests = this.groupJoinRequests.filter(
      (gjr) => gjr.getId() !== id,
    )
  }

  getDetails(id: string): GroupJoinRequestDTO | undefined {
    return this.groupJoinRequests.find((gjr) => gjr.getId() === id)
  }

  findAll(): GroupJoinRequestDTO[] {
    return this.groupJoinRequests
  }
}
