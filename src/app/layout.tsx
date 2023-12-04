
import './globals.css'
import type { Metadata } from 'next'
import { Hind_Siliguri, Oswald } from 'next/font/google'


const oswald = Oswald({ subsets: ['latin'], weight: ["500", "400"] })
export const siliguri = Hind_Siliguri({ subsets: ['bengali'], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'Flash',
  description: 'Online shope',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className="scroll-smooth"
      lang="en"
    >
      <body className={siliguri.className}>{children}</body>
    </html>
  )
}
