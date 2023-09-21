import SearchSection from "./components/SearchSection/SearchSection";
import MovieList from "./components/MovieList/MovieList";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMDMzOGUzMDcxYTY3Mjg1MjU4M2I5YzY4ZDlkYSIsInN1YiI6IjY1MDA1YmU1NmEyMjI3MDExYTdhYTliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahfZbMIpPcMBfgz1xBsnX4chtpgVtFTyzLk84qr_J6M",
  },
};

async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day",
    options
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  // console.log
  const movies = data.results;

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/trending/all/day",
  //       options
  //     );
  //     const results = await response.json();
  //     // const newResult = results.results;
  //     setMovies(results.results);
  //     console.log(results.results);
  //   }
  //   fetchData();
  //   // fetch()
  // });

  return (
    <main>
      <SearchSection
        variant="searchBar"
        splaceholder="Search for a movie, tv show, person......"
        searchBtnText="Search"
        title="Welcome."
        subTitle="Millions of movies, TV shows and people to discover. Explore now."
      />
      <MovieList movieList={movies} />
    </main>
  );
}
