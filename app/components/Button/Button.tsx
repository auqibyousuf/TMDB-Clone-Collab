import { ButtonType } from "@/app/types/Button/ButtonTypes";
import classNames from "classnames";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Button = ({ btnText, btnUrl, clickHandler, variant }: ButtonType) => {
  const buttonClasses = classNames({
    "block uppercase text-btnTextColor px-5 py-2 bg-white rounded":
      variant == "join",
    "text-white w-5 h-5 ": variant == "search",
  });
  return (
    <Link href={btnUrl} onClick={clickHandler} className={buttonClasses}>
      {btnText}
      {variant == "search" && <FaSearch className={buttonClasses} />}
    </Link>
  );
};

export default Button;
