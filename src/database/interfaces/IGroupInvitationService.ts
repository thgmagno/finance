import { GroupInvitationDTO } from '@/database/dtos/GroupInvitationDTO'

export interface IGroupInvitationService {
  create(groupInvitation: GroupInvitationDTO): void
  edit(id: string, groupInvitation: GroupInvitationDTO): void
  delete(id: string): void
  getDetails(id: string): GroupInvitationDTO | undefined
  findAll(): GroupInvitationDTO[]
}
