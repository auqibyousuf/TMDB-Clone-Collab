import React from 'react'
import { NavListType } from './NavListType'
import LinkComponent from '../Link/Link'
import classNames from 'classnames'
import Heading from '../Heading/Heading'

const NavList = ({
  menuLinks,
  listItemExtraClasses,
  listContainerExtraClasses,
  variant,
  navLinkExtraClasses,
  title,
}: NavListType) => {
  const listContainerClasses = classNames({
    'flex relative gap-4': variant == 'header',
    'flex flex-col': variant == 'footer',
  })
  const listItemClasses = classNames({
    'group relative': variant == 'header',
    'gap-2': variant == 'footer',
  })

  const subMenuClasses = classNames(
    'hidden text-black text-base group-hover:block absolute rounded-8 top-7 transition bg-white w-40 -left-2 z-10'
  )
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
                extraClasses={navLinkExtraClasses}
              />
              {linkItem.subMenu && linkItem.subMenu.length > 0 && (
                <ul className={subMenuClasses}>
                  {linkItem.subMenu.map((subLinks, index) => {
                    return (
                      <li key={index}>
                        <LinkComponent
                          text={subLinks.text}
                          url={subLinks.url}
                          extraClasses='py-2 px-4 block hover:bg-slate-200 rounded-8'
                        />
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavList
