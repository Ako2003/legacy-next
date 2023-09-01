import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'
import LeftSidebar from '@/components/LeftSidebar'
import TopSidebar from '@/components/TopSidebar'
import Footerbar from '@/components/Footerbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='flex flex-col sm:hidden'>
            <TopSidebar />
          </div>              
          <div className='flex flex-row max-sm:hidden'>
            <LeftSidebar/>
          </div>
          <div className='flex flex-row'>
            {children}
          </div>
          <div className='flex flex-col sm:hidden'>
            <Footerbar/>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
