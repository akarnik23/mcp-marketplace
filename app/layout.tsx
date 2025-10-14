import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import './globals.css'

const golos = Golos_Text({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'MCP Marketplace • Integrations for Poke',
  description: 'Add hosted MCP integrations to Poke without local setup.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={golos.className} style={{ background: 'linear-gradient(to bottom, #203a54, #000000)' }}>{children}</body>
    </html>
  )
}
