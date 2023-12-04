
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"] })

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
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
