import HeroSection from './components/HeroSection/HeroSection'
import { MovieCardTypes } from './components/MovieCard/MovieCardTypes'
import MovieList from './components/MovieList/MovieList'
import { MovieListTypes } from './components/MovieList/MovieListTypes'

export default function Home() {
  const moviesList = [
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
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
      title: 'No Hard Feelings',
      date: 'Jun 15, 2023',
      menuPopLinks: {
        links: [
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
          {
            text: '2',
            url: '#',
          },
        ],
      },
    },
  ]

  const buttonsList = [
    {
      text: 'Today',
    },
    {
      text: 'This Week',
    },
  ]
  return (
    <main>
      <div className='w-[1440px] mx-auto'>
        <HeroSection
          title='Welcome.'
          description='Millions of movies, TV shows and people to discover. Explore now.'
          bgImg={{
            imgUrl: 'https://loremflickr.com/1440/360',
            imgAlt: 'hero-image',
          }}
        />
        <MovieList
          movies={moviesList}
          buttonTabs={buttonsList}
          title='Trending'
        />
      </div>
    </main>
  )
}
