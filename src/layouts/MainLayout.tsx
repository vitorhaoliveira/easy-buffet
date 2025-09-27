import { AppSidebar } from '@/components/ui/sidebar/app-sidebar'
import { Separator } from '@/components/ui/nav-menu/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar/sidebar'
import { Outlet } from 'react-router-dom'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
