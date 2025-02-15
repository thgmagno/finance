import { CategoryDTO } from '../dtos/CategoryDTO'
import { ICategoryService } from './ICategoryService'

export class CategoryService implements ICategoryService {
  private categories: CategoryDTO[] = []

  create(category: CategoryDTO) {
    this.categories.push(category)
  }

  edit(id: string, category: CategoryDTO) {
    const index = this.categories.findIndex((c) => c.getId() === id)
    if (index !== -1) {
      this.categories[index] = category
    }
  }

  delete(id: string) {
    this.categories = this.categories.filter((c) => c.getId() !== id)
  }

  getDetails(id: string): CategoryDTO | undefined {
    return this.categories.find((c) => c.getId() === id)
  }

  findAll(): CategoryDTO[] {
    return this.categories
  }
}
