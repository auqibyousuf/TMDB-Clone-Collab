'use client'
import React from 'react'
import { InputType } from './InputTypes'
import classNames from 'classnames'

const Input = ({
  placeholder,
  onChange,
  onKeyPress,
  defaultValue,
  extraClasses,
  variant = 'text',
  icon: Icon,
}: InputType) => {
  const inputClasses = classNames(
    ' focus:outline-0 w-full text-darkGrey placeholder:text-darkGrey',
    {
      'border-0 px-5 rounded-30 h-[44px] py-3  text-[17px]': variant == 'text',
    },
    {
      'px-[70px] py-3': variant == 'search',
    }
  )
  const iconClasses = classNames(
    'w-[14px] h-[14px] absolute fill-black left-10 z-20'
  )
  return (
    <div className='bg-white w-full border-b'>
      <div className='relative max-w-[1440px] w-full mx-auto flex items-center'>
        {Icon && <Icon className={iconClasses} />}
        <input
          type={variant}
          placeholder={placeholder}
          className={`${inputClasses} ${extraClasses ?? ''}`}
          onChange={onChange}
          onKeyDown={onKeyPress}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  )
}

export default Input
