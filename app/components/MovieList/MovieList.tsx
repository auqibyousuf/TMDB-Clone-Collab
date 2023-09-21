import MovieCard from "../MovieCard/MovieCard";
import Button from "../Button/Button";
import Link from "next/link";

const MovieList = ({ movieList }: any) => {
  const filters = [
    {
      name: "Today",
      value: "today",
    },
    {
      name: "This week",
      value: "week",
    },
  ];

  console.log(movieList);
  return (
    <div>
      <div className="flex pt-8">
        {filters.map(({ name }) => {
          return (
            <Button variant="switch" btnText={name} btnUrl="#" key={name} />
          );
        })}
      </div>

      <div className="grid grid-cols-6 gap-5 pt-5 pb-10">
        {movieList.map((movie: any) => {
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
            <a key={id} href={`/movie/${id}`}>
              <MovieCard
                title={title}
                backdrop_path={backdrop_path}
                vote={vote_average}
                release_date={release_date}
                poster_path={poster_path}
                first_air_date={first_air_date}
                name={name}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
