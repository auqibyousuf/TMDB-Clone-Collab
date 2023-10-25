import type { Meta, StoryObj } from '@storybook/react'
import NavList from './NavList'

const meta = {
  title: 'Components/NavList',
  component: NavList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavList>

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
