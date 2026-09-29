import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { site } from '@/lib/site-content'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const title = 'SMX Inventários | Inventário de estoque e gestão de estoques'
const description =
  'Inventários de estoque completos com equipe especializada, software próprio e relatórios analíticos. Atendimento em RJ, SP, MG, ES e no Nordeste. Solicite um orçamento.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s | SMX Inventários' },
  description,
  keywords: [
    'inventário de estoque',
    'balanço de loja',
    'contagem de estoque',
    'gestão de estoques',
    'inventário rotativo',
    'inventário varejo',
    'SMX Inventários',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: '/images/hero-inventario.png',
        width: 1312,
        height: 816,
        alt: 'Equipe da SMX realizando inventário com coletores de dados em um supermercado',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/hero-inventario.png'] },
  icons: { icon: '/apple-icon.png', apple: '/apple-icon.png' },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fcfbf8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
