import { MovieListTypes } from '../MovieList/MovieListTypes'
import { SearchSideBarTypes } from '../SearchSideBar/SearchSideBarTypes'

export type SearchPageTypes = {
  searchResults: SearchSideBarTypes
  searchedMoviesList: MovieListTypes
  onChange?: React.ChangeEventHandler
}
