import SearchSection from "./components/SearchSection/SearchSection";

export default function Home() {
  return (
    <main>
      <SearchSection
        variant="searchBar"
        splaceholder="Search for a movie, tv show, person......"
        searchBtnText="Search"
        title="Welcome."
        subTitle="Millions of movies, TV shows and people to discover. Explore now."
      />
    </main>
  );
}
