import Image from 'next/image'
import React from 'react'
import { SearchMovieCardType } from './SearchMovieCardTypes'
import Heading from '../Heading/Heading'
import Text from '../Text/Text'

const SearchMovieCard = ({ searchedMovieCard }: SearchMovieCardType) => {
  return (
    <div className='flex items-start border rounded-8 shadow bg-white'>
      <div className='w-[94px] h-[141px] '>
        <Image
          src={searchedMovieCard.cardImage.imgSrc}
          width={94}
          height={141}
          alt={searchedMovieCard.cardImage.imgAlt}
          className='w-full h-auto rounded-l-8'
        />
      </div>
      <div className='px-4 py-5'>
        <Heading
          variant='20'
          text={searchedMovieCard.title}
          extraClasses='text-black'
        />
        <Text
          text={searchedMovieCard.date}
          variant='16'
          extraClasses='mb-5 opacity-50 text-black'
        />
        {searchedMovieCard.description && (
          <Text
            text={searchedMovieCard.description}
            variant='16'
            extraClasses='text-black'
          />
        )}
      </div>
    </div>
  )
}

export default SearchMovieCard
