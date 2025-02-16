import { GroupMemberDTO } from '@/database/dtos/GroupMemberDTO'

export class GroupMemberRepository {
  private groupMembers: GroupMemberDTO[] = []

  create(groupMember: GroupMemberDTO): void {
    this.groupMembers.push(groupMember)
  }

  edit(id: string, groupMember: GroupMemberDTO): void {
    const index = this.groupMembers.findIndex((gm) => gm.getId() === id)
    if (index !== -1) {
      this.groupMembers[index] = groupMember
    }
  }

  delete(id: string): void {
    this.groupMembers = this.groupMembers.filter((gm) => gm.getId() !== id)
  }

  getDetails(id: string): GroupMemberDTO | undefined {
    return this.groupMembers.find((gm) => gm.getId() === id)
  }

  findAll(): GroupMemberDTO[] {
    return this.groupMembers
  }
}
