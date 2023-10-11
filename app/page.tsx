import HeroSection from './components/HeroSection/HeroSection'
import MovieList from './components/MovieList/MovieList'
import { buttonsList, moviesList } from './mockdata'

export default function Home() {
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
        <MovieList movies={moviesList} tabs={buttonsList} title='Trending' />
      </div>
    </main>
  )
}
