import type { Meta, StoryObj } from '@storybook/react'
import SearchMovieCard from './SearchMovieCard'

const meta = {
  title: 'Components/Search Movie Card',
  component: SearchMovieCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchMovieCard>

export default meta
type Story = StoryObj<typeof meta>

export const SearchMovieCardComponent: Story = {
  args: {
    searchedMovieCard: {
      cardImage: {
        imgSrc: 'https://placehold.co/94x141',
        imgAlt: 'card image',
      },
      title: 'Meg 2: The Trench',
      date: 'August 4, 2023',
      description:
        'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
    },
  },
}
