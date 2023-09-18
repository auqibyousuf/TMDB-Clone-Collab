/* eslint-disable @next/next/no-img-element */
"use client";
import { MovieCard } from "@/app/types/MovieCard/MovieCardTypes";

const MovieCard = ({ moviesList }: MovieCard) => {
  const moviePosterHandler = () => {};
  const img_300 = "https://image.tmdb.org/t/p/w200";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  return (
    <div className="grid grid-cols-6 gap-5">
      {moviesList.map((movieList) => {
        const {
          backdrop_path,
          title,
          popularity,
          release_date,
          poster_path,
          first_air_date,
          name,
        } = movieList;

        return (
          <div
            key={title}
            onClick={moviePosterHandler}
            className="h-full relative w-56"
          >
            <img
              src={poster_path ? `${img_300}${poster_path}` : unavailable}
              alt={title}
              width={220}
              height={330}
              className="relative"
            />
            <div>
              <p className=" font-bold">{title ? title : name}</p>
              <span>{release_date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
