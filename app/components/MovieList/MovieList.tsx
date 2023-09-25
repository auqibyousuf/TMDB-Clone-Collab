/* eslint-disable @next/next/no-async-client-component */
"use client";
import MovieCard from "../MovieCard/MovieCard";
import { MovieListType } from "@/app/types/MovieList/MovieListType";

function MovieList({ movies }: MovieListType) {
  return (
    <div>
      <ul className="grid laptop:grid-cols-6 gap-5 pt-5 pb-10 tablet:grid-cols-4 mobile:grid-cols-1">
        {movies?.map((movie: any) => {
          const {
            backdrop_path,
            title,
            vote_average,
            release_date,
            poster_path,
            first_air_date,
            name,
            id,
          } = movie;
          return (
            <li key={id}>
              <a href={`/movie/${id}`}>
                <MovieCard
                  title={title}
                  backdrop_path={backdrop_path}
                  vote={vote_average}
                  release_date={release_date}
                  poster_path={poster_path}
                  name={name}
                  first_air_date={first_air_date}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;
