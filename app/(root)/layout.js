import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'
import LeftSidebar from '@/components/LeftSidebar'
import TopSidebar from '@/components/TopSidebar'
import Footerbar from '@/components/Footerbar'
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 ${inter.className}`}>
          <Theme>
            <div className='flex flex-col sm:hidden'>
              <TopSidebar />
            </div>              
            <div className='flex flex-row h-screen'>
              <LeftSidebar/>
              <div className='w-screen text-gray-400'>
                {children}
              </div>
            </div>
            <div className='flex flex-col sm:hidden'>
              <Footerbar/>
            </div>
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  )
}
