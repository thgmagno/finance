import { auth } from '@/auth'
import { PublicNavbar } from '@/components/common/PublicNavbar'
import { ModeToggle } from '@/components/ModeToggle'
import { redirect } from 'next/navigation'

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  if (session?.user?.email || isSessionUpToDate(session?.expires)) {
    redirect('/')
  }

  return (
    <section className="mb-32">
      <div className="flex items-center justify-between border-b-2 border-accent bg-accent/40 p-5 backdrop-blur-md">
        <span className="text-lg font-bold text-foreground">Finance App</span>
        <ModeToggle />
      </div>
      <PublicNavbar />
      <div className="p-5">{children}</div>
    </section>
  )
}

type ISODateString = string

function isSessionUpToDate(expires?: ISODateString): boolean {
  if (!expires) return false
  return new Date(expires) <= new Date()
}
