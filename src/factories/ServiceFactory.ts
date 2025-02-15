import { CategoryService } from '@/database/services/CategoryService'
import { ICategoryService } from '@/database/services/ICategoryService'

class ServiceFactory {
  private static categoryService: ICategoryService

  static getCategoryService(): ICategoryService {
    if (!this.categoryService) {
      this.categoryService = new CategoryService()
    }
    return this.categoryService
  }
}

export const service = {
  Categories: {
    Category: ServiceFactory.getCategoryService(),
  },
  Groups: {
    Group: {},
    GroupJoinRequest: {},
    GroupInvitation: {},
    GroupMember: {},
  },
  Transactions: {
    Transaction: {},
    Reserve: {},
    Payment: {},
    Receipt: {},
  },
  Users: {
    Feedback: {},
    Users: {},
  },
}
