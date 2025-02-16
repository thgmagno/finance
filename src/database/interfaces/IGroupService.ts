import { GroupDTO } from '@/database/dtos/GroupDTO'

export interface IGroupService {
  create(group: GroupDTO): void
  edit(id: string, group: GroupDTO): void
  delete(id: string): void
  getDetails(id: string): GroupDTO | undefined
}
