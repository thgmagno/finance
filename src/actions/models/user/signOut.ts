'use server'

import { repositories } from '@/database/repositories'
import { getServerSession } from '@/actions/models/session'

export async function signOut() {
  const userId = await getServerSession('id')
  return repositories.users.user.signOut(userId)
}
