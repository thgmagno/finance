import { signIn } from '@/auth'

export default function LoginPage() {
  return (
    <main>
      <h1>LoginPage</h1>
      <form
        action={async () => {
          'use server'
          await signIn('google')
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          'use server'
          await signIn('github')
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </main>
  )
}
