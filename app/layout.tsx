'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header/Header'
import { ImSearch } from 'react-icons/im'
import Footer from './components/Footer/Footer'
import { footerMenus, navMenu } from './mockdata/index'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header
          logo={{
            imgSrc: 'header-logo.svg',
            url: '/',
            altText: 'header-logo',
          }}
          ActionIcon={ImSearch}
          menu={{ menuLinks: navMenu }}
        />
        {children}
        <Footer
          logo={{
            imgSrc: 'footer-logo.svg',
            url: '/',
            altText: 'Footer Logo',
          }}
          menus={footerMenus}
        />
      </body>
    </html>
  )
}
