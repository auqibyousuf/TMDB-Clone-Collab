import { LinkType } from '../Link/LinkTypes'

export type NavListType = {
  menuLinks: Array<LinkType>
  listItemExtraClasses?: string
  listContainerExtraClasses?: string
  variant?: 'header' | 'footer' | 'default'
  extraClasses?: string
  title?: string
}
