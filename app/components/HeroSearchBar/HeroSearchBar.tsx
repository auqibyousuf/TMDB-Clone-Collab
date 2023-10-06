import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { HeroSearchBarType } from './HeroSearchBarTypes'
import classNames from 'classnames'

const HeroSearchBar = ({ input, search, extraClasses }: HeroSearchBarType) => {
  const heroSearchBarClasses = classNames(
    'flex justify-between items-center mt-12 py-3 h-12 text-black'
  )
  return (
    <div className={`${heroSearchBarClasses} ${extraClasses ?? ''}`}>
      <Input
        placeholder={input?.placeholder}
        onChange={input?.onChange}
        extraClasses={input?.extraClasses}
        variant='text'
      />
      <Button variant='hero-section' text='Search' onClick={search?.onClick} />
    </div>
  )
}

export default HeroSearchBar
