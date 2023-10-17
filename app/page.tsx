'use client'
import useSWR from 'swr'
import HeroSection from './components/HeroSection/HeroSection'
import MovieList from './components/MovieList/MovieList'
import { APIKEY, baseURL, fetcher, baseImgURL } from './api/api'
import { useState } from 'react'

export default function Home() {
  const [time, setTime] = useState<'day' | 'week'>('day')

  const {
    data: trendingMoviesData,
    error: trendingMoviesError,
    isLoading: trendingMoviesIsLoading,
  } = useSWR(`${baseURL}/3/trending/movie/${time}?api_key=${APIKEY}`, fetcher)

  const {
    data: popularMoviesData,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR(`${baseURL}/3/movie/popular?api_key=${APIKEY}`, fetcher)

  if (trendingMoviesError || popularMoviesError)
    return <div>failed to load</div>
  if (trendingMoviesIsLoading || popularMoviesIsLoading)
    return <div>loading...</div>

  const getFormattedMovies = (movies: any) => {
    return movies.map((movie: any) => {
      return {
        cardImage: {
          imgSrc: `${baseImgURL}${movie.poster_path}`,
          imgAlt: 'not found',
        },
        rating: {
          value: Math.floor(movie.vote_average * 10),
        },
        title: movie.title,
        date: movie.release_date,
        menuPopOverLinks: {
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
    })
  }

  const trendingMovies = getFormattedMovies(trendingMoviesData.results)
  const popularMovies = getFormattedMovies(popularMoviesData.results)

  const buttonsList = [
    {
      tabsName: { text: 'Today' },
      onClick: () => {
        setTime('day')
      },
    },
    {
      tabsName: { text: 'This Week' },
      onClick: () => {
        setTime('week')
      },
    },
  ]

  return (
    <main>
      <div className='w-[1440px] mx-auto'>
        <HeroSection
          title='Welcome.'
          description='Millions of movies, TV shows and people to discover. Explore now.'
          bgImg={{
            imgUrl: 'https://loremflickr.com/1440/361',
            imgAlt: 'hero-image',
          }}
        />
        <MovieList
          movies={trendingMovies}
          tabs={buttonsList}
          title='Trending'
        />
        <MovieList movies={popularMovies} title='Popular' />
      </div>
    </main>
  )
}
