'use client'
import MovieCard from '../MovieCard/MovieCard'
import { MovieListTypes } from './MovieListTypes'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import classNames from 'classnames'
import { useState } from 'react'

const MovieList = ({
  title,
  buttonTabs,
  movies,
  extraClasses,
}: MovieListTypes) => {
  const moviesListClasses = classNames(
    'mt-5 mb-10 flex gap-5 overflow-y-hidden pb-3'
  )
  const buttonTabClasses = classNames(
    'inline-block border border-darkBlue rounded-[30px]'
  )

  const buttonClick = (e: any) => {
    alert(`clicked on ${e.target.value} button`)
  }
  return (
    <div className='pl-10'>
      <div className='flex gap-5 mt-8'>
        <Heading text={title} variant='24' />
        <div className={buttonTabClasses}>
          {buttonTabs.map((buttonTab, index) => {
            return (
              <Button
                key={index}
                text={buttonTab.text}
                extraClasses=''
                variant='tabs'
                onClick={buttonClick}
                value={buttonTab.text}
              />
            )
          })}
        </div>
      </div>

      <ul className={`${moviesListClasses} ${extraClasses ?? ''}`}>
        {movies.map((movie, index) => {
          return (
            <li key={index} className='flex shrink-0 basis-40'>
              <MovieCard
                cardImage={movie.cardImage}
                rating={movie.rating}
                title={movie.title}
                menuPopLinks={movie.menuPopLinks}
                date={movie.date}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
