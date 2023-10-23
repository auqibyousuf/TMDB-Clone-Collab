import type { Meta, StoryObj } from '@storybook/react'
import SearchPage from './SearchPage'
import { moviesList, searchList } from '../../mockdata/index'

const meta = {
  title: 'Components/Search Page',
  component: SearchPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchPage>

export default meta
type Story = StoryObj<typeof meta>

export const SearchPageComponent: Story = {
  args: {
    searchedMoviesList: {
      movies: moviesList,
    },
    searchResults: {
      title: 'Search results',
      searchList: searchList,
      resultsCount: 2222,
    },
  },
}
