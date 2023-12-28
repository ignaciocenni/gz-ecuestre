import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import NavBar from '@/components/NavBar'

const CastoroRegular = localFont({
  src: '../fonts/Castoro-Regular.ttf',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'GZ ECUESTRE',
  description: 'Compra y venta de caballos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${CastoroRegular.className} bg-blanco`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
