import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'
const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const FooterMenu: Story = {
  args: {
    logo: {
      imgSrc: 'https://placehold.co/150x50',
      altText: '',
      url: '',
      variant: 'footer',
    },
    menus: [
      {
        title: 'THE BASICS',
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
      },
      {
        title: 'COMMUNITY',
        menuLinks: [
          { text: 'Guidelines', url: '/guidelines' },
          { text: 'Discussions', url: '/discussions' },
          { text: 'Leaderboard', url: '/leaderboard' },
          { text: 'Twitter', url: '/twitter' },
        ],
      },
      {
        title: 'LEGAL',
        menuLinks: [
          { text: 'Terms of Use', url: '/' },
          { text: 'API Terms of Use', url: '/' },
          { text: 'Privacy Policy', url: '/' },
          { text: 'DMCA Takedown Request', url: '/' },
        ],
      },
    ],
  },
}
