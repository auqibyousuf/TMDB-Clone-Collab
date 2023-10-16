'use client'
import useSWR from 'swr'
import HeroSection from './components/HeroSection/HeroSection'
import MovieList from './components/MovieList/MovieList'
import { API, baseURL, fetcher, imgURL } from './api/api'
import { useState } from 'react'

export default function Home() {
  /* Trending Movies Section*/
  const [time, setTime] = useState<'day' | 'week'>('day')

  const {
    data: trendingMoviesData,
    error: trendingMoviesError,
    isLoading: trendingMoviesIsLoading,
  } = useSWR(`${baseURL}/3/trending/movie/${time}?api_key=${API}`, fetcher)

  const {
    data: popularMoviesData,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR(`${baseURL}/3/movie/popular?api_key=${API}`, fetcher)

  if (trendingMoviesError) return <div>failed to load</div>
  if (trendingMoviesIsLoading) return <div>loading...</div>

  const trendingMovies = trendingMoviesData.results.map((results: any) => {
    const { poster_path, release_date, title, vote_average } = results
    return {
      cardImage: {
        imgSrc: `${imgURL}${poster_path}`,
        imgAlt: 'not found',
      },
      rating: {
        value: Math.floor(vote_average * 10),
      },
      title: title,
      date: release_date,
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

  /* Polular Movies */

  if (popularMoviesError) return <div>failed to load</div>
  if (popularMoviesIsLoading) return <div>loading...</div>

  console.log(popularMoviesData)
  console.log(trendingMoviesData)

  const popularMovies = popularMoviesData.results.map((results: any) => {
    const { poster_path, release_date, title, vote_average } = results
    return {
      cardImage: {
        imgSrc: `${imgURL}${poster_path}`,
        imgAlt: 'not found',
      },
      rating: {
        value: Math.floor(vote_average * 10),
      },
      title: title,
      date: release_date,
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

  /* Popular Movies Section*/

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
