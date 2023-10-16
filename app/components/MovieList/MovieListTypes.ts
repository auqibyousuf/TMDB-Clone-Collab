import { ButtonType } from '../Button/ButtonTypes'
import { MovieCardTypes } from '../MovieCard/MovieCardTypes'

export type MovieListTypes = {
  movies: Array<MovieCardTypes>
  tabs?: Array<{ tabsName: ButtonType; onClick: React.MouseEventHandler }>
  title: string
  extraClasses?: string
}
