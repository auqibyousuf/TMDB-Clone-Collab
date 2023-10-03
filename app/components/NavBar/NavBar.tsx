import React from 'react'
import { NavBarType } from './NavBarType'
import LinkComponent from '../Link/Link'
import classNames from 'classnames'
import Heading from '../Heading/Heading'

const NavBar = ({
  menuLinks,
  listItemExtraClasses,
  listContainerExtraClasses,
  variant,
  extraClasses,
  title,
}: NavBarType) => {
  const listContainerClasses = classNames({
    'flex relative gap-4': variant == 'header',
    'flex flex-col': variant == 'footer',
  })
  const listItemClasses = classNames({
    'group flex relative': variant == 'header',
    'gap-2': variant == 'footer',
  })
  return (
    <div>
      {title && (
        <Heading
          variant='20'
          text={title}
          extraClasses='font-bold text-white pb-3 uppercase'
        />
      )}
      <ul
        className={`${listContainerClasses} ${listContainerExtraClasses ?? ''}`}
      >
        {menuLinks.map((linkItem, index) => {
          const { text, url } = linkItem
          return (
            <li
              key={index}
              className={`${listItemClasses} ${listItemExtraClasses ?? ''}`}
            >
              <LinkComponent
                url={url}
                text={text}
                extraClasses={extraClasses}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar
