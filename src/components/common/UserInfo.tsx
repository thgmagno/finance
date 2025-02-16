import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export async function UserInfo() {
  const session = await auth()
  const user = session?.user

  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle>Informações da conta</CardTitle>
        <CardDescription>
          Dados não editáveis. Para alterar, acesse a conta de origem.
        </CardDescription>
      </CardHeader>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Nome do usuário"
                defaultValue={user?.name ?? ''}
                disabled
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="E-mail do usuário"
                defaultValue={user?.email ?? ''}
                disabled
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" className="flex-1" variant="destructive">
            Encerrar sessão
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
