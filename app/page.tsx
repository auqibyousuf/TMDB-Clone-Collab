import HeroSection from './components/HeroSection/HeroSection'
import MenuPopOver from './components/MenuPopOver/MenuPopOver'
import MovieCard from './components/MovieCard/MovieCard'

export default function Home() {
  const links = [
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
        <div className='mt-5 pl-10'>
          <MovieCard
            cardImage={{
              imgSrc: 'https://loremflickr.com/150/225',
              imgAlt: '',
            }}
            rating={{
              value: 90,
            }}
            title='SpiderMan Across the Spider-Verse'
            date='May 31, 2023'
            menuPoplinks={{ links: links }}
          />
        </div>
      </div>
    </main>
  )
}
