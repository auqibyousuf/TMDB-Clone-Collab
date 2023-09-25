import { LinkButtonType } from "@/app/types/LinkButton/LinkButtonTypes";
import classNames from "classnames";
import Link from "next/link";

const LinkButton = ({
  btnText,
  btnUrl,
  clickHandler,
  variant,
}: LinkButtonType) => {
  const buttonClasses = classNames({
    "block uppercase text-btnTextColor px-5 py-2 bg-white rounded":
      variant == "join",
    "px-7 py-3 rounded-3xl w-28 h-11 flex items-center justify-center text-white absolute right-0 bg-red-600 h-12":
      variant == "search",
    "px-5 py-2 font-bold text-lg bg-[#805BE7] rounded": variant == "signup",
  });
  return (
    <Link href={btnUrl} onClick={clickHandler} className={buttonClasses}>
      {btnText}
    </Link>
  );
};

export default LinkButton;
