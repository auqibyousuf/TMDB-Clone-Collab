'use client'
import React, { ChangeEvent } from 'react'
import { HeroSectionType } from './HeroSectionTypes'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import Text from '../Text/Text'
import HeroSearchBar from '../HeroSearchBar/HeroSearchBar'
import classNames from 'classnames'
import Image from 'next/image'

const HeroSection = ({
  title,
  description,
  bgImg,
  extraClasses,
}: HeroSectionType) => {
  const handleInputChange = () => {
    alert('Input Changed')
  }
  const handleSearchClick = () => {
    alert('Search Button Clicked')
  }
  const heroSectionClasses = classNames(
    'bg-primaryColor text-white px-10 py-24 absolute top-0 w-full'
  )

  return (
    <div className='relative'>
      <Image
        alt={bgImg.imgAlt}
        width={1300}
        height={360}
        src={bgImg.imgUrl}
        className='w-full'
      />
      <div className={`${heroSectionClasses} ${extraClasses ?? ''}`}>
        <Heading text={title} variant='48' />
        <Text text={description} variant='32' />
        <HeroSearchBar
          input={{
            placeholder: 'Search for a movie, tv show, person......',
            onChange: handleInputChange,
          }}
          search={{
            text: 'Search',
            onClick: handleSearchClick,
          }}
        />
      </div>
    </div>
  )
}

export default HeroSection
