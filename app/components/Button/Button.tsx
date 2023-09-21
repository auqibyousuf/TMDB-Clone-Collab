import { ButtonType } from "@/app/types/Button/ButtonTypes";
import classNames from "classnames";
import Link from "next/link";

const Button = ({ btnText, btnUrl, clickHandler, variant }: ButtonType) => {
  const buttonClasses = classNames({
    "block uppercase text-btnTextColor px-5 py-2 bg-white rounded":
      variant == "join",
    "px-7 py-3 rounded-3xl w-28 h-11 flex items-center justify-center text-white absolute right-0 bg-red-600 h-12":
      variant == "search",
    "rounded-3xl bg-green px-5": variant == "switch",
  });
  return (
    <Link href={btnUrl} onClick={clickHandler} className={buttonClasses}>
      {btnText}
    </Link>
  );
};

export default Button;
