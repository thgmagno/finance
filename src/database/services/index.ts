import { CategoryService } from './CategoryService'

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
    Users: {},
  },
}
