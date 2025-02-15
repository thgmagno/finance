export class UsuarioDTO {
  private id: number
  private nome: string
  private email: string

  constructor(id: number, nome: string, email: string) {
    this.id = id
    this.nome = nome
    this.email = email
  }

  getId(): number {
    return this.id
  }

  getNome(): string {
    return this.nome
  }

  getEmail(): string {
    return this.email
  }

  setNome(nome: string): void {
    this.nome = nome
  }

  setEmail(email: string): void {
    this.email = email
  }
}
