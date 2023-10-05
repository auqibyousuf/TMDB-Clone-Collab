import type { Meta, StoryObj } from '@storybook/react'
import MovieCard from './MovieCard'

const meta = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MovieCard>

export default meta
type Story = StoryObj<typeof meta>

export const MovieCardComponent: Story = {
  args: {
    cardImage: {
      imgSrc: '',
      imgAlt: 'card-image',
    },
    rating: {
      value: 10,
    },
    title: 'Movie Title',
    date: 'Movie Date',
    menuPoplinks: {
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
  },
}
