import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
})

export const metadata: Metadata = {
  title: 'Meu Portfólio - Desenvolvedor Full Stack',
  description: 'Portfólio profissional demonstrando minhas habilidades em desenvolvimento Full Stack, com foco em Python, React e SQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} ${pressStart2P.variable} bg-[rgb(36,36,36)] text-white`}>
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {children}
        </main>
      </body>
    </html>
  )
} 