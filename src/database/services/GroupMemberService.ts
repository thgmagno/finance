import { GroupMemberDTO } from '../dtos/GroupMemberDTO'
import { IGroupMemberService } from '../interfaces/IGroupMemberService'
import { GroupMemberRepository } from '../repositories/GroupMemberRepository'

export class GroupMemberService implements IGroupMemberService {
  private repository = new GroupMemberRepository()

  create(groupMember: GroupMemberDTO): void {
    this.repository.create(groupMember)
  }

  edit(id: string, groupMember: GroupMemberDTO): void {
    this.repository.edit(id, groupMember)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): GroupMemberDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): GroupMemberDTO[] {
    return this.repository.findAll()
  }
}
