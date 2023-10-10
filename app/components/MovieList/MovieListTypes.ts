import { ButtonType } from '../Button/ButtonTypes'
import { MovieCardTypes } from '../MovieCard/MovieCardTypes'

export type MovieListTypes = {
  movies: Array<MovieCardTypes>
  tabs?: Array<ButtonType>
  title: string
  extraClasses?: string
}
