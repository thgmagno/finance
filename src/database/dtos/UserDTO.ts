export class UserDTO {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly active: boolean,
    private readonly creationDate: Date,
  ) {}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getEmail(): string {
    return this.email
  }

  getPassword(): string {
    return this.password
  }

  getActive(): boolean {
    return this.active
  }

  getCreationDate(): Date {
    return this.creationDate
  }
}
