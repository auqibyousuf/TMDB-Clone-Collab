import { useState } from 'react'
import { HeaderType } from './HeaderTypes'
import classNames from 'classnames'
import NavList from '../NavList/NavList'
import { Logo } from '../Logo/Logo'
import Input from '../Input/Input'
import { ImSearch } from 'react-icons/im'
import { useRouter } from 'next/navigation'

const Header = ({ logo, menu, ActionIcon, extraClasses }: HeaderType) => {
  const [isActive, setIsActive] = useState<Boolean>(false)
  const navBarClasses = classNames(
    'flex gap-4 items-center max-w-[1440px] w-full px-10 h-full flex'
  )
  const headerClasses = classNames(
    'bg-darkBlue h-28 py-3 w-full justify-center flex items-center'
  )
  const iconClasses = classNames('text-lightBlue w-5 h-5 hover:pointer ml-auto')
  const router = useRouter()
  return (
    <div>
      <header className={`${headerClasses} ${extraClasses ?? ''}`}>
        <nav className={navBarClasses}>
          <Logo
            imgSrc={logo.imgSrc}
            altText={logo.altText}
            extraClasses='mr-4'
            url={logo.url}
            variant='header'
          />
          <NavList
            menuLinks={menu.menuLinks}
            listContainerExtraClasses={menu.listContainerExtraClasses}
            listItemExtraClasses={menu.listItemExtraClasses}
            variant='header'
            navLinkExtraClasses='font-semibold text-white'
          />
          {ActionIcon && (
            <ActionIcon
              className={iconClasses}
              onClick={() => {
                setIsActive(!isActive)
              }}
            />
          )}
        </nav>
      </header>
      <a href=''>
        <div className={isActive ? 'block' : 'hidden'}>
          <Input
            variant='search'
            placeholder='Search'
            icon={ImSearch}
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                router.push('/search')
              }
            }}
          />
        </div>
      </a>
    </div>
  )
}

export default Header
