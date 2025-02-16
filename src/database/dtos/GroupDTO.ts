export class GroupDTO {
  constructor(
    private readonly id: string,
    private readonly creatorUserId: string,
    private readonly name: string,
    private readonly description: string,
    private readonly creationDate: Date,
  ) {}

  getId(): string {
    return this.id
  }

  getCreatorUserId(): string {
    return this.creatorUserId
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  getCreationDate(): Date {
    return this.creationDate
  }
}
