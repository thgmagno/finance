import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
