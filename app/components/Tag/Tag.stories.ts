import type { Meta, StoryObj } from '@storybook/react'
import Tag from './Tag'

const meta = {
  title: 'Components/Search SideBar',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const TagComponent: Story = {
  args: {
    count: 20097,
  },
}
