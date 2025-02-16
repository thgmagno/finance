import { GroupInvitationDTO } from '../dtos/GroupInvitationDTO'
import { IGroupInvitationService } from '../interfaces/IGroupInvitationService'
import { GroupInvitationRepository } from '../repositories/GroupInvitationRepository'

export class GroupInvitationService implements IGroupInvitationService {
  private repository = new GroupInvitationRepository()

  create(groupInvitation: GroupInvitationDTO): void {
    this.repository.create(groupInvitation)
  }

  edit(id: string, groupInvitation: GroupInvitationDTO): void {
    this.repository.edit(id, groupInvitation)
  }

  delete(id: string): void {
    this.repository.delete(id)
  }

  getDetails(id: string): GroupInvitationDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): GroupInvitationDTO[] {
    return this.repository.findAll()
  }
}
