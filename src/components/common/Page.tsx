import React from 'react'
import { Separator } from '@/components/ui/separator'

interface Props {
  title?: string
  children: React.ReactNode
}

export function Page({ title, children }: Props) {
  return (
    <main className="flex w-full flex-col space-y-6">
      {title && (
        <>
          <h1 className="text-xl font-semibold text-muted-foreground">
            {title}
          </h1>
          <Separator />
        </>
      )}
      {children}
    </main>
  )
}
