import Header from '@/components/Header';
import '../styles/global.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '700'] 
  })

export const metadata = {
  title: 'Encontro Radical - Inscrição',
  description: 'Ainda há tempo para um novo encontro com Deus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
