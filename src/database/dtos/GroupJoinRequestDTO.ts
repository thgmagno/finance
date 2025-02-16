import { GroupJoinRequestStatus } from '@/database/enums/groups'

export class GroupJoinRequestDTO {
  constructor(
    private readonly id: string,
    private readonly groupId: string,
    private readonly userId: string,
    private readonly requestDate: Date,
    private readonly responseDate: Date,
    private readonly status: GroupJoinRequestStatus,
  ) {}

  getId(): string {
    return this.id
  }

  getGroupId(): string {
    return this.groupId
  }

  getUserId(): string {
    return this.userId
  }

  getRequestDate(): Date {
    return this.requestDate
  }

  getResponseDate(): Date {
    return this.responseDate
  }

  getStatus(): GroupJoinRequestStatus {
    return this.status
  }
}
