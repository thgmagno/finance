import { CategoryDTO } from '@/database/dtos/CategoryDTO'

export interface ICategoryService {
  create(category: CategoryDTO): void
  edit(id: string, category: CategoryDTO): void
  delete(id: string): void
  getDetails(id: string): CategoryDTO | undefined
  findAll(): CategoryDTO[]
}
