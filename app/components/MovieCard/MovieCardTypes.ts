import { MenuPopOverTypes } from '../MenuPopOver/MenuPopOverTypes'
import { RatingTypes } from '../Rating/RatingTypes'

export type ImageType = {
  imgSrc: string
  imgAlt: string
}

export type MovieCardTypes = {
  id?: string
  cardImage: ImageType
  rating?: RatingTypes
  title: string
  date: string
  onCardClick?: React.MouseEventHandler
  extraClasses?: string
  menuPopOverLinks?: MenuPopOverTypes
  description?: string
}
