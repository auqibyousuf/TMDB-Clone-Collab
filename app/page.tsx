import Image from 'next/image'
import HeroSearchBar from './components/HeroSearchBar/HeroSearchBar'
import HeroSection from './components/HeroSection/HeroSection'

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
      </div>
    </main>
  )
}
