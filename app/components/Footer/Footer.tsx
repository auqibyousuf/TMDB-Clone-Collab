import React from 'react'
import { FooterType } from './FooterType'
import classNames from 'classnames'
import { Logo } from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

const Footer = ({ logo, menus }: FooterType) => {
  const { imgSrc, url, altText, variant } = logo
  const footerClasses = classNames(
    'bg-darkBlue w-full flex justify-center gap-20 h-80 px-60 py-20'
  )
  return (
    <footer className={footerClasses}>
      <Logo imgSrc={imgSrc} url={url} altText={altText} variant='footer' />
      {menus.map((menu, index) => {
        return (
          <NavBar
            key={index}
            menuLinks={menu.menuLinks}
            variant='footer'
            title={menu.title}
            extraClasses='font-normal'
          />
        )
      })}
    </footer>
  )
}

export default Footer
