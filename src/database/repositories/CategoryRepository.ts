import { CategoryDTO } from '@/database/dtos/CategoryDTO'

export class CategoryRepository {
  private categories: CategoryDTO[] = []

  create(category: CategoryDTO): void {
    this.categories.push(category)
  }

  edit(id: string, category: CategoryDTO): void {
    const index = this.categories.findIndex((c) => c.getId() === id)
    if (index !== -1) {
      this.categories[index] = category
    }
  }

  delete(id: string): void {
    this.categories = this.categories.filter((c) => c.getId() !== id)
  }

  getDetails(id: string): CategoryDTO | undefined {
    return this.categories.find((c) => c.getId() === id)
  }

  findAll(): CategoryDTO[] {
    return this.categories
  }
}
