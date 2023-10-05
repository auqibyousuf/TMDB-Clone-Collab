import Image from 'next/image'
import React from 'react'
import { LogoType } from './LogoTypes'
import Link from 'next/link'
import classNames from 'classnames'

export const Logo = ({
  imgSrc,
  url,
  altText,
  extraClasses,
  variant,
}: LogoType) => {
  const imageClasses = classNames({
    'w-[150px] h-[50px]': variant == 'header',
    'w-[130px] h-[94px]': variant == 'footer',
  })
  return (
    <Link href={url} className={extraClasses ?? ''}>
      {variant == 'header' ? (
        <Image
          src={imgSrc}
          alt={altText}
          width={150}
          height={50}
          className={imageClasses}
        />
      ) : (
        <Image
          src={imgSrc}
          alt={altText}
          width={130}
          height={94}
          className={imageClasses}
        />
      )}
    </Link>
  )
}
