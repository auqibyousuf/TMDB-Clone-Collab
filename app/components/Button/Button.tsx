import React from 'react'
import { ButtonType } from './ButtonTypes'
import classNames from 'classnames'

const Button = ({ text, variant, extraClasses, onClick }: ButtonType) => {
  const buttonClasses = classNames({
    'py-3 px-6 rounded-30 bg-linearGradient text-white px-7 py-3  w-28 h-12 flex items-center justify-center absolute right-0':
      variant == 'hero-section',
  })
  return (
    <button
      className={`${buttonClasses} ${extraClasses ?? ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
