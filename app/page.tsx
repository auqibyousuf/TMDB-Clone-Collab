"use client";
import SearchSection from "./components/SearchSection/SearchSection";
import MovieList from "./components/MovieList/MovieList";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
import TrailerList from "./components/TrailerList/TrailerList";
import CTABanner from "./components/CTABanner/CTABanner";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMDMzOGUzMDcxYTY3Mjg1MjU4M2I5YzY4ZDlkYSIsInN1YiI6IjY1MDA1YmU1NmEyMjI3MDExYTdhYTliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahfZbMIpPcMBfgz1xBsnX4chtpgVtFTyzLk84qr_J6M",
  },
};

const api = "https://api.themoviedb.org/3/";
const filters = [
  {
    name: "Today",
    value: "day",
  },
  {
    name: "This week",
    value: "week",
  },
];

// async function getMoviesID() {
//   const res = await fetch(`${api}movie/615656/videos`, options);
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

//Whats popular API
//https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc

export default function Home() {
  const [movies, setMovies] = useState<any>([]);
  const [trailers, setTrailers] = useState<any>([]);
  const [popular, setPopular] = useState<any>([]);

  const getMovies = async (type: string) => {
    try {
      const res = await fetch(`${api}trending/all/${type}`, options);
      const { results: movies } = await res.json();
      setMovies(movies);
    } catch (e) {
      console.log(e);
    }
  };

  const getTrailers = async () => {
    try {
      const res = await fetch(
        `${api}discover/movie?include_adult=false&include_video=true&language=en-US&page=1&release_date.gte=2023-09-01&release_date.lte=2023-09-30&sort_by=popularity.desc`,
        options
      );
      const { results: trailers } = await res.json();
      setTrailers(trailers);
    } catch (e) {}
  };

  const getWhatsPopular = async () => {
    try {
      const res = await fetch(
        `${api}discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
        options
      );
      const { results: popular } = await res.json();
      setPopular(popular);
      // console.log(setPopular);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies("day");
    getTrailers();
    getWhatsPopular();
  }, []);
  // const movieData = await getData();
  // const trailerData = await getTrailers();
  // const trailers = trailerData.results;
  // const moviesID = await getMoviesID();
  // const movies = movieData.results;
  // console.log(movies);
  // const movieID = movies.id;

  const handleGetMovies = (event: any) => {
    const val = event.target.value;
    getMovies(val);
  };

  return (
    <main>
      <div className="w-[1440px] mx-auto">
        <SearchSection
          variant="searchBar"
          splaceholder="Search for a movie, tv show, person......"
          searchBtnText="Search"
          title="Welcome."
          subTitle="Millions of movies, TV shows and people to discover. Explore now."
        />

        <ul className="inline-flex mt-8 rounded-3xl border border-solid border-[#032541] text-base font-semibold py-1 px-5 text-[#032541] ">
          {filters.map(({ name, value }) => {
            return (
              <li key={name} className="">
                <Button
                  btnType="button"
                  btnText={name}
                  key={name}
                  btnVal={value}
                  clickHandler={handleGetMovies}
                />
              </li>
            );
          })}
        </ul>
        <MovieList movies={movies} />

        <TrailerList trailers={trailers} />

        <div>
          <p>Whats Popular</p>
          <MovieList movies={popular} />
        </div>
      </div>

      <CTABanner
        title="Join Today"
        body="Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Max Amazon Channel, Disney Plus, and Apple TV Plus."
        extras="Enjoy TMDB ad free Maintain a personal watchlist Filter by your subscribed streaming services and find something to watch Log the movies and TV shows you've seen Build custom lists Contribute to and improve our database"
      />
    </main>
  );
}
