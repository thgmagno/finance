import { service } from '@/database/services'
import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

export default async function Usuario({ params }: Props) {
  const id = Number((await params).id)

  if (!id || isNaN(id)) redirect('/usuarios')

  const usuario = service.usuario.buscarPorId(id)

  if (!usuario) {
    return (
      <div>
        <p>Usuários não encontrado</p>
      </div>
    )
  }

  return (
    <div className="p-5">
      <div className="bg-accent mb-3 rounded p-3">
        <p>{usuario.getNome()}</p>
        <p>{usuario.getEmail()}</p>
      </div>
    </div>
  )
}
