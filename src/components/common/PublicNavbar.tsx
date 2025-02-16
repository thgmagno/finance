'use client'

import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function PublicNavbar() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-evenly border-b-2 bg-gradient-to-r from-neutral-300 via-stone-200 to-neutral-300 p-3 text-xs text-black shadow dark:from-neutral-900 dark:via-gray-900 dark:to-neutral-900 dark:text-white md:mb-8 md:text-sm">
      <Link
        href="/entrar"
        className={clsx('flex items-center transition-all duration-200', {
          'border-b-2 border-muted-foreground font-semibold':
            pathname === '/entrar',
        })}
      >
        Fazer login
      </Link>
      <Link
        href="/sobre"
        className={clsx('flex items-center transition-all duration-200', {
          'border-b-2 border-muted-foreground font-semibold':
            pathname === '/sobre',
        })}
      >
        Conhecer o projeto
      </Link>
      <Link
        href="/apoiar"
        className={clsx('flex items-center transition-all duration-200', {
          'border-b-2 border-muted-foreground font-semibold':
            pathname === '/apoiar',
        })}
      >
        Apoiar o projeto
      </Link>
    </nav>
  )
}
