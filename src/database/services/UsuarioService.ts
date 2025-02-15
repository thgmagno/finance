import { UsuarioDTO } from '../dtos/UsuarioDTO'

export class UsuarioService {
  private usuarios: UsuarioDTO[] = [
    new UsuarioDTO(1, 'Thiago', 'thiago@email.com'),
    new UsuarioDTO(2, 'Maria', 'maria@email.com'),
  ]

  listarUsuarios(): UsuarioDTO[] {
    return this.usuarios
  }

  buscarPorId(id: number): UsuarioDTO | undefined {
    return this.usuarios.find((user) => user.getId() === id)
  }
}
