export class GroupMemberDTO {
  constructor(
    private readonly id: string,
    private readonly groupId: string,
    private readonly userId: string,
    private readonly sendDate: Date,
    private readonly acceptDate: Date,
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

  getSendDate(): Date {
    return this.sendDate
  }

  getAcceptDate(): Date {
    return this.acceptDate
  }
}
