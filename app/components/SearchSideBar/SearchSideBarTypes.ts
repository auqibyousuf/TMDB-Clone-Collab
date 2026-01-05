import { LinkType } from '../Link/LinkTypes'

export type SearchSideBarTypes = {
  title: string
  searchList: Array<LinkType>
  resultsCount: number
  extraClasses?: string
}
