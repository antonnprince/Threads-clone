import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Topbar from '@/components/shared/Topbar'
import Leftsidebar from '@/components/shared/Leftsidebar'
import Rightsidebar from '@/components/shared/Rightsidebar'
import Bottombar from '@/components/shared/Bottombar'
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata={
  title:"Threads",
  description:"A Threads clone built using Next.js 14"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            <Topbar/>
            <main>
              <Leftsidebar />
                <section className='main-container'>
                  <div className='w-full max-w-4xl'>
                    {children}
                  </div>
                </section>
              <Rightsidebar />
            </main>
          <Bottombar/>
        </body>
    </html>
  </ClerkProvider>
  )
}
