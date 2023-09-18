import { ButtonType } from "@/app/types/Button/ButtonTypes";
import classNames from "classnames";
import Link from "next/link";

const Button = ({ btnText, btnUrl, clickHandler, variant }: ButtonType) => {
  const switchButton = ({ values }: any) => {
    <Link href={btnUrl} onClick={clickHandler} className={buttonClasses}>
      {values}
    </Link>;
  };
  const buttonClasses = classNames({
    "block uppercase text-btnTextColor px-5 py-2 bg-white rounded":
      variant == "join",
    "px-7 py-3 rounded-3xl w-28 h-11 flex items-center justify-center text-white absolute right-0 bg-red-600 h-12":
      variant == "search",
  });
  return (
    <>
      {variant == "join" ? (
        <Link href={btnUrl} onClick={clickHandler} className={buttonClasses}>
          {btnText}
        </Link>
      ) : (
        switchButton
      )}
    </>
  );
};

export default Button;
