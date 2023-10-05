import type { Meta, StoryObj } from '@storybook/react'
import MenuPopOver from './MenuPopOver'

const meta = {
  title: 'Components/MenuPopOver',
  component: MenuPopOver,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MenuPopOver>

export default meta
type Story = StoryObj<typeof meta>

export const MenuPopOverComponent: Story = {
  args: {
    links: [
      {
        text: '1',
        url: '#',
      },
      {
        text: '1',
        url: '#',
      },
      {
        text: '1',
        url: '#',
      },
    ],
  },
}
