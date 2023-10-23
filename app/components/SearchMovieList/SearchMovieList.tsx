import React from 'react'
import SearchMovieCard from '../SearchMovieCard/SearchMovieCard'
import { SearchMovieListType } from './SearchMovieListType'
import Link from 'next/link'

const SearchMovieList = ({ searchList }: SearchMovieListType) => {
  return (
    <ul className='flex flex-col gap-5'>
      {searchList.map((searchMovie, index) => {
        return (
          <li key={index}>
            <Link href={`/movie/${searchMovie.id}`} title={searchMovie.title}>
              <SearchMovieCard
                searchedMovieCard={{
                  cardImage: {
                    imgSrc: searchMovie.cardImage.imgSrc,
                    imgAlt: searchMovie.cardImage.imgAlt,
                  },
                  title: searchMovie.title,
                  date: searchMovie.date,
                  description: searchMovie.description,
                }}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SearchMovieList
