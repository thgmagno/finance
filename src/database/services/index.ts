import { CategoryService } from '@/database/services/CategoryService'

export const service = {
  Categories: {
    Category: new CategoryService(),
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
    User: {},
  },
}
