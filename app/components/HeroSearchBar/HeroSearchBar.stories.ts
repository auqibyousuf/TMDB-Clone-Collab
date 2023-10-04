import type { Meta, StoryObj } from '@storybook/react'
import HeroSearchBar from './HeroSearchBar'
const meta = {
  title: 'Components/HeroSearchBar',
  component: HeroSearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroSearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const HeroSearchBarComponent: Story = {
  args: {
    input: {
      placeholder: 'Search for a movie, tv show, person......',
      defaultValue: '',
    },
    search: {
      text: 'search',
      variant: 'hero-section',
    },
  },
}
