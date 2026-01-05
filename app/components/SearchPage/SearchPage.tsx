'use client'
import React from 'react'
import SearchSideBar from '../SearchSideBar/SearchSideBar'
import { SearchPageTypes } from './SearchPageTypes'
import SearchMovieList from '../SearchMovieList/SearchMovieList'

const SearchPage = ({ searchResults, searchedMoviesList }: SearchPageTypes) => {
  return (
    <div className='px-10'>
      <div className='flex gap-8 py-8'>
        <SearchSideBar
          title={searchResults.title}
          searchList={searchResults.searchList}
          resultsCount={searchResults.resultsCount}
        />
        <SearchMovieList searchList={searchedMoviesList.movies} />
      </div>
    </div>
  )
}

export default SearchPage
