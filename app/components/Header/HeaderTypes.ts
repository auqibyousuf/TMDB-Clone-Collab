import { IconType } from 'react-icons'
import { LogoType } from '../Logo/LogoTypes'
import { NavListType } from '../NavList/NavListType'

export type HeaderType = {
  logo: LogoType
  menu: NavListType
  submenu?: NavListType
  ActionIcon: IconType
  extraClasses?: string
}
