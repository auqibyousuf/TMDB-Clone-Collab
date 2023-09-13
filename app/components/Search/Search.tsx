import classNames from "classnames";
import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { SearchTypes } from "@/app/types/Search/SearchTypes";

const Search = ({ searchBar, searchVariant, searchPlaceholder }: any) => {
  const searchClasses = classNames({
    "text-white w-5 h-5 ": searchVariant == "icon",
    "flex text-lg items-center mt-12 relative": searchVariant == "searchBar",
  });
  const searchBarClasses = classNames({
    "px-5 py-3 w-full rounded-3xl relative h-12": searchVariant == "searchBar",
  });
  return (
    <>
      {searchVariant == "searchBar" && (
        <div className={searchClasses}>
          <InputField
            placeholder={searchPlaceholder}
            type="text"
            extraClasses={searchBarClasses}
          />
          <Button
            btnUrl={searchBar.btnUrl}
            btnText={searchBar.btnText}
            variant="search"
          />
        </div>
      )}
      {searchVariant == "icon" && <FaSearch className={searchClasses} />}
    </>
  );
};

export default Search;
