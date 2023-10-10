'use client'
import MovieCard from '../MovieCard/MovieCard'
import { MovieListTypes } from './MovieListTypes'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import classNames from 'classnames'
import { useState } from 'react'

const MovieList = ({ title, tabs, movies, extraClasses }: MovieListTypes) => {
  const moviesListClasses = classNames(
    'mt-5 mb-10 flex gap-5 overflow-y-hidden relative'
  )
  const buttonTabContainerClasses = classNames(
    'inline-block border border-darkBlue  rounded-30'
  )
  const buttonTabClasses = classNames(
    'data-[button=true]:bg-darkBlue data-[button=true]:rounded-30 text-lightGreen data-[button=true]:text-white'
  )
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='pl-10 '>
      <div className='flex gap-5 mt-8'>
        <Heading text={title} variant='24' />
        {tabs && tabs.length > 0 && (
          <div className={buttonTabContainerClasses}>
            {tabs.map((tab, index) => {
              return (
                <Button
                  key={index}
                  text={tab.text}
                  variant='tab'
                  onClick={() => {
                    setActiveTab(index)
                  }}
                  value={tab.text}
                  dataButton={activeTab == index}
                  extraClasses={buttonTabClasses}
                />
              )
            })}
          </div>
        )}
      </div>

      <ul className={`${moviesListClasses} ${extraClasses ?? ''}`}>
        {movies.map((movie, index) => {
          return (
            <li key={index} className='flex shrink-0 basis-40'>
              <MovieCard
                cardImage={movie.cardImage}
                rating={movie.rating}
                title={movie.title}
                menuPopOverLinks={movie.menuPopOverLinks}
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
