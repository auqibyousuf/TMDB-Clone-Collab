import React from 'react'
import { RatingTypes } from './RatingTypes'
import classNames from 'classnames'
import classnames from 'classnames'

const Rating = ({ variant, value, extraClasses }: RatingTypes) => {
  const ratingClasses = classNames({
    'flex items-center justify-center text-white font-bold  w-full h-full ':
      variant == 'movie',
  })

  const psedoClasses = classnames(
    'border-2 w-[34px] h-[34px] absolute rounded-full',
    {
      'border-green-600': value >= 70 && value <= 100,
      'border-yellow-600': value >= 50 && value < 70,
      'border-red-600': value > 0 && value < 59,
    }
  )
  return (
    <div
      className={`w-[38px] h-[38px] p-[2px] rounded-full bg-black ${
        extraClasses ?? ''
      }`}
    >
      <span className={psedoClasses} aria-hidden='true'></span>
      <div className={`${ratingClasses} `}>
        <span className='text-[10px] block'>
          {value}
          <sup className='text-[6px] -top-[4px]'>%</sup>
        </span>
      </div>
    </div>
  )
}

export default Rating
