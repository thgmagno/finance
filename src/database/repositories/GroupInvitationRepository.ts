import { GroupInvitationDTO } from '@/database/dtos/GroupInvitationDTO'

export class GroupInvitationRepository {
  private groupInvitations: GroupInvitationDTO[] = []

  create(groupInvitation: GroupInvitationDTO): void {
    this.groupInvitations.push(groupInvitation)
  }

  edit(id: string, groupInvitation: GroupInvitationDTO): void {
    const index = this.groupInvitations.findIndex((gi) => gi.getId() === id)
    if (index !== -1) {
      this.groupInvitations[index] = groupInvitation
    }
  }

  delete(id: string): void {
    this.groupInvitations = this.groupInvitations.filter(
      (gi) => gi.getId() !== id,
    )
  }

  getDetails(id: string): GroupInvitationDTO | undefined {
    return this.groupInvitations.find((gi) => gi.getId() === id)
  }

  findAll(): GroupInvitationDTO[] {
    return this.groupInvitations
  }
}
