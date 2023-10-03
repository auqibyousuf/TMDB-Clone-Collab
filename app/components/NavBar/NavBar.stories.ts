import type { Meta, StoryObj } from '@storybook/react'
import NavBar from './NavBar'

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const NavBarMenu: Story = {
  args: {
    variant: 'header',
    menuLinks: [
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
    ],
  },
}
