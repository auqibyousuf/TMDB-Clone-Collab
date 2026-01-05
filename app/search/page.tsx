'use client'
import React from 'react'
import { searchMoviesList, searchList } from '../mockdata'
import SearchPage from '../components/SearchPage/SearchPage'

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <SearchPage
        searchResults={{
          title: 'Search Results',
          searchList: searchList,
          resultsCount: 20,
        }}
        searchedMoviesList={{
          movies: searchMoviesList,
        }}
      />
    </div>
  )
}

export default Page
