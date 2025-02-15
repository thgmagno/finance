import { service } from '@/database/services'

export default function Grupo() {
  const usuarios = service.usuario.listarUsuarios()

  return (
    <div className="flex flex-col p-5">
      {usuarios.map((u) => (
        <div className="mb-3 rounded bg-accent p-3">
          <p>{u.getNome()}</p>
          <p>{u.getEmail()}</p>
        </div>
      ))}
    </div>
  )
}
