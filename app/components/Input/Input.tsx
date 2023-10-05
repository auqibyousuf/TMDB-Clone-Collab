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
    'px-5 border-0 focus:outline-0 rounded-30 h-[44px] py-3 placeholder:text-darkGrey text-[17px] w-full'
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
