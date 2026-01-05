import React from 'react'
import { SearchSideBarTypes } from './SearchSideBarTypes'
import Heading from '../Heading/Heading'
import NavList from '../NavList/NavList'
import Tag from '../Tag/Tag'

const SearchSideBar = ({
  title,
  searchList,
  resultsCount,
  extraClasses,
}: SearchSideBarTypes) => {
  return (
    <div
      className={`rounded-8 border border-semiGrey bg-white h-full ${
        extraClasses ?? ''
      }`}
    >
      <Heading
        text={title}
        variant='20'
        extraClasses='py-5 pl-5 bg-lightBlue rounded-t-8 text-white'
      />
      {resultsCount && searchList && (
        <>
          <NavList
            menuLinks={searchList}
            listContainerExtraClasses='my-2 w-[258px]'
            listItemExtraClasses='bg-white flex text-black justify-between py-[10px] px-5 items-center group hover:bg-black/10 hover:pointer'
            navLinkExtraClasses='block w-full'
          />
          <Tag count={resultsCount} />
        </>
      )}
    </div>
  )
}

export default SearchSideBar
