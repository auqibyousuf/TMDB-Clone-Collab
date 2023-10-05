import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header/Header'
import { ImSearch } from 'react-icons/im'
import Footer from './components/Footer/Footer'
import { NavBarType } from './components/NavBar/NavBarType'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const navMenu = [
  {
    text: 'Movies',
    url: '#',
  },
  {
    text: 'Tv Shows',
    url: '#',
  },
  {
    text: 'People',
    url: '/person',
  },
  {
    text: 'More',
    url: '#',
  },
]

const footerMenus: Array<NavBarType> = [
  {
    title: 'THE BASICS',
    variant: 'footer',
    menuLinks: [
      { text: 'About TMDB', url: '/about' },
      { text: 'Contact Us', url: '/contact' },
      { text: 'Support Forums', url: '/supportforums' },
      { text: 'API', url: '/api' },
      { text: 'System Status', url: '/status' },
    ],
  },
  {
    title: 'GET INVOLVED',
    menuLinks: [
      { text: 'Contribution Bible', url: '/' },
      { text: 'Add New Movie', url: '/' },
      { text: 'Add New TV Show', url: '/' },
    ],
    variant: 'footer',
  },
  {
    title: 'COMMUNITY',
    menuLinks: [
      { text: 'Guidelines', url: '/guidelines' },
      { text: 'Discussions', url: '/discussions' },
      { text: 'Leaderboard', url: '/leaderboard' },
      { text: 'Twitter', url: '/twitter' },
    ],
    variant: 'footer',
  },
  {
    title: 'LEGAL',
    menuLinks: [
      { text: 'Terms of Use', url: '/' },
      { text: 'API Terms of Use', url: '/' },
      { text: 'Privacy Policy', url: '/' },
      { text: 'DMCA Takedown Request', url: '/' },
    ],
    variant: 'footer',
  },
]
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
