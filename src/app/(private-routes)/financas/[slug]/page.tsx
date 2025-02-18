import { AddButton } from '@/components/common/AddButton'
import { Page } from '@/components/common/Page'
import { redirect } from 'next/navigation'

const slugConfig = {
  pagamentos: {
    addHref: '/financas/pagamentos/adicionar',
  },
  recebimentos: {
    addHref: '/financas/recebimentos/adicionar',
  },
  reservas: {
    addHref: '/financas/reservas/adicionar',
  },
}

type SlugType = keyof typeof slugConfig

export default async function FinanceSlugPage({
  params,
}: {
  params: Promise<{ slug: SlugType }>
}) {
  const slug = (await params).slug
  const config = slugConfig[slug]

  if (!config) redirect('/financas')

  return (
    <Page>
      <AddButton href={config.addHref} label="Adicionar" />
    </Page>
  )
}
