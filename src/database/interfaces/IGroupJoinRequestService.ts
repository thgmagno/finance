import { GroupJoinRequestDTO } from '@/database/dtos/GroupJoinRequestDTO'

export interface IGroupJoinRequestService {
  create(groupJoinRequest: GroupJoinRequestDTO): void
  edit(id: string, groupJoinRequest: GroupJoinRequestDTO): void
  delete(id: string): void
  getDetails(id: string): GroupJoinRequestDTO | undefined
  findAll(): GroupJoinRequestDTO[]
}
