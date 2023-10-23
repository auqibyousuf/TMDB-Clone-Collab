import React from 'react'
import { SearchSideBarTypes } from './SearchSideBarTypes'
import Heading from '../Heading/Heading'
import NavList from '../NavList/NavList'

const SearchSideBar = ({
  title,
  searchList,
  resultsCount,
  extraClasses,
}: SearchSideBarTypes) => {
  return (
    <div
      className={`w-[258px] rounded-8 border border-semiGrey bg-white h-full ${
        extraClasses ?? ''
      }`}
    >
      <Heading
        text={title}
        variant='20'
        extraClasses='py-5 pl-5 bg-lightBlue rounded-t-8 text-white'
      />
      <NavList
        menuLinks={searchList}
        countClasses='rounded-8 px-[10px] py-1 bg-black/5 block group-hover:bg-white'
        count={resultsCount}
        listContainerExtraClasses='my-2'
        listItemExtraClasses='bg-white flex text-black justify-between py-[10px] px-5 items-center group hover:bg-black/10 hover:pointer'
        navLinkExtraClasses='block w-full'
      />
    </div>
  )
}

export default SearchSideBar
