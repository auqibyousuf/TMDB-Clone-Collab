import { MenuPopOverTypes } from '../MenuPopOver/MenuPopOverTypes'
import { RatingTypes } from '../Rating/RatingTypes'

export type MovieCardTypes = {
  cardImage: {
    imgSrc: string
    imgAlt: string
  }
  rating: RatingTypes
  title: string
  date: string
  onCardClick?: React.MouseEventHandler
  onMenuClick?: React.MouseEventHandler
  extraClasses?: string
  menuPoplinks: MenuPopOverTypes
}
