"use client";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import SearchSection from "./components/SearchSection/SearchSection";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMDMzOGUzMDcxYTY3Mjg1MjU4M2I5YzY4ZDlkYSIsInN1YiI6IjY1MDA1YmU1NmEyMjI3MDExYTdhYTliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahfZbMIpPcMBfgz1xBsnX4chtpgVtFTyzLk84qr_J6M",
    },
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day",
        options
      );
      const results = await response.json();
      // const newResult = results.results;
      setMovies(results.results);
      console.log(results.results);
    }
    fetchData();
    // fetch()
  });
  return (
    <main>
      <SearchSection
        variant="searchBar"
        splaceholder="Search for a movie, tv show, person......"
        searchBtnText="Search"
        title="Welcome."
        subTitle="Millions of movies, TV shows and people to discover. Explore now."
      />
      <MovieCard moviesList={movies} />
    </main>
  );
}
