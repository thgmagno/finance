export class CategoryDTO {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly type: string,
  ) {}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getType(): string {
    return this.type
  }
}
