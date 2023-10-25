import React from 'react'
import { TagType } from './TagTypes'

const Tag = ({ count, extraClasses }: TagType) => {
  const countClasses =
    'rounded-8 px-[10px] py-1 bg-black/5 block group-hover:bg-white'
  return (
    count && (
      <span className={`${countClasses} ${extraClasses ?? ''}`}>{count}</span>
    )
  )
}

export default Tag
