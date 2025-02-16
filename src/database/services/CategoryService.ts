import { CategoryDTO } from '@/database/dtos/CategoryDTO'
import { ICategoryService } from '@/database/interfaces/ICategoryService'
import { CategoryRepository } from '../repositories/CategoryRepository'

export class CategoryService implements ICategoryService {
  private repository = new CategoryRepository()

  create(category: CategoryDTO) {
    this.repository.create(category)
  }

  edit(id: string, category: CategoryDTO) {
    this.repository.edit(id, category)
  }

  delete(id: string) {
    this.repository.delete(id)
  }

  getDetails(id: string): CategoryDTO | undefined {
    return this.repository.getDetails(id)
  }

  findAll(): CategoryDTO[] {
    return this.repository.findAll()
  }
}
