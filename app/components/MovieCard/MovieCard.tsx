import Image from 'next/image'
import React from 'react'
import Rating from '../Rating/Rating'
import Text from '../Text/Text'
import { MovieCardTypes } from './MovieCardTypes'
import classNames from 'classnames'
import MenuPopOver from '../MenuPopOver/MenuPopOver'

const MovieCard = ({
  cardImage,
  rating,
  title,
  menuPopOverLinks,
  date,
  onCardClick,
  extraClasses,
}: MovieCardTypes) => {
  const movieCardClasses = classNames(
    'relative flex flex-col max-w-[150px] gap-6'
  )

  return (
    <a
      href='#'
      className={`${movieCardClasses} ${extraClasses ?? ''}`}
      onClick={onCardClick}
    >
      <Image
        width={150}
        height={225}
        alt={cardImage.imgAlt}
        src={cardImage.imgSrc}
        className='w-[150px] h-[225px] rounded rounded-8'
      />

      <MenuPopOver
        links={menuPopOverLinks.links}
        extraClasses='absolute right-[10px] top-[10px] z-20'
      />
      <div className='ml-3'>
        <Rating
          value={rating.value}
          variant='movie'
          extraClasses='absolute bottom-[26%]'
        />
        <Text text={title} variant='16' extraClasses='font-bold' />
        <Text text={date} variant='16' extraClasses='opacity-50' />
      </div>
    </a>
  )
}

export default MovieCard
