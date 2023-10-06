import type { Meta, StoryObj } from '@storybook/react'
import MovieList from './MovieList'

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
    movies: [
      {
        cardImage: {
          imgSrc: 'https://loremflickr.com/150/225',
          imgAlt: 'movie-card',
        },
        rating: {
          value: 80,
        },
        title: 'SpiderMan Across the Spider-Verse',
        date: 'May 31, 2023',
        menuPopLinks: {
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
      {
        cardImage: {
          imgSrc: 'https://loremflickr.com/150/225',
          imgAlt: 'movie-card',
        },
        rating: {
          value: 80,
        },
        title: 'SpiderMan Across the Spider-Verse',
        date: 'May 31, 2023',
        menuPopLinks: {
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
      {
        cardImage: {
          imgSrc: 'https://loremflickr.com/150/225',
          imgAlt: 'movie-card',
        },
        rating: {
          value: 80,
        },
        title: 'SpiderMan Across the Spider-Verse',
        date: 'May 31, 2023',
        menuPopLinks: {
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
      {
        cardImage: {
          imgSrc: 'https://loremflickr.com/150/225',
          imgAlt: 'movie-card',
        },
        rating: {
          value: 80,
        },
        title: 'SpiderMan Across the Spider-Verse',
        date: 'May 31, 2023',
        menuPopLinks: {
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
    ],
    buttonTabs: [
      {
        text: 'Today',
      },
      {
        text: 'This Week',
      },
    ],
    title: 'Trending',
  },
}
