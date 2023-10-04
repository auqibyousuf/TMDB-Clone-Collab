import type { Meta, StoryObj } from '@storybook/react'
import HeroSection from './HeroSection'

const meta = {
  title: 'Components/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const HeroSectionVariant: Story = {
  args: {
    title: 'Welcome.',
    description:
      'Millions of movies, TV shows and people to discover. Explore now.',
    bgImg: {
      imgUrl: 'https://loremflickr.com/1440/360',
      imgAlt: 'hero-image',
    },
  },
}
