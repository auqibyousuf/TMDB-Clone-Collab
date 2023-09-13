import { SearchSectionTypes } from "@/app/types/SearchSection/SearchSectionType";
import Search from "../Search/Search";

const SearchSection = ({
  splaceholder,
  title,
  subTitle,
  searchBtnText,
}: any) => {
  return (
    <div className="bg-primaryColor text-white px-10 py-24">
      <h1 className="text-5xl">{title}</h1>
      <p className="text-3xl">{subTitle}</p>
      <Search
        searchPlaceholder={splaceholder}
        searchVariant="searchBar"
        searchBar={{ btnText: "search", btnUrl: "/" }}
      />
    </div>
  );
};

export default SearchSection;
