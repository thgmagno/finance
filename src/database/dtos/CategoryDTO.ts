import { CategoryType } from '../enums/categories'

export class CategoryDTO {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly type: CategoryType,
  ) {}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getType(): CategoryType {
    return this.type
  }
}
