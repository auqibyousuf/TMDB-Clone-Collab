import React from 'react'
import { InputType } from './InputTypes'
import classNames from 'classnames'

const Input = ({
  placeholder,
  onChange,
  defaultValue,
  extraClasses,
  variant = 'text',
}: InputType) => {
  const inputClasses = classNames(
    'px-10 border-0 focus:outline-0 rounded-30 h-[44px] px-5 py-3 w-full relative h-12 placeholder:text-darkGrey text-[17px] font-normal'
  )
  return (
    <input
      type={variant}
      placeholder={placeholder}
      className={`${inputClasses} ${extraClasses ?? ''}`}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  )
}

export default Input
