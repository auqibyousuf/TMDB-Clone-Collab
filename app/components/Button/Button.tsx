import React from 'react'
import { ButtonType } from './ButtonTypes'
import classNames from 'classnames'

const Button = ({
  text,
  variant,
  extraClasses,
  value,
  onClick,
}: ButtonType) => {
  const buttonClasses = classNames({
    'py-3 px-6 rounded-30 bg-linearGradient text-white px-7 py-3  w-28 h-12 flex items-center justify-center':
      variant == 'hero-section',
    'px-5 py-1 rounded-5 text-darkBlue text-[16px] text-semibold':
      variant == 'tabs',
  })
  return (
    <button
      className={`${buttonClasses} ${extraClasses ?? ''}`}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  )
}

export default Button
