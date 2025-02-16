import { GroupMemberDTO } from '@/database/dtos/GroupMemberDTO'

export interface IGroupMemberService {
  create(groupMember: GroupMemberDTO): void
  edit(id: string, groupMember: GroupMemberDTO): void
  delete(id: string): void
  getDetails(id: string): GroupMemberDTO | undefined
  findAll(): GroupMemberDTO[]
}
