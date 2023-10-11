import type { Meta, StoryObj } from '@storybook/react'
import MovieList from './MovieList'
import { buttonsList, moviesList } from '@/app/mockdata'

const meta = {
  title: 'Components/MovieList',
  component: MovieList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MovieList>

export default meta
type Story = StoryObj<typeof meta>

export const MovieListComponent: Story = {
  args: {
    movies: moviesList,
    tabs: buttonsList,
    title: 'Trending',
  },
}
