import { HeadingTypes } from '../Heading/HeadingTypes'
import { LogoType } from '../Logo/LogoTypes'
import { NavListType } from '../NavList/NavListType'

export type FooterType = {
  logo: LogoType
  menus: Array<NavListType>
  extraClasses?: string
}
