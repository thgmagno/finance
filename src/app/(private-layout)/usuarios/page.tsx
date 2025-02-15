import { service } from '@/database/services'
import Link from 'next/link'

export default function Usuarios() {
  const usuarios = service.usuario.listarUsuarios()

  return (
    <div className="flex flex-col p-5">
      {usuarios.map((u) => (
        <div className="bg-accent mb-3 rounded p-3">
          <Link href={`/usuarios/${u.getId()}`}>{u.getNome()}</Link>
          <p>{u.getEmail()}</p>
        </div>
      ))}
    </div>
  )
}
