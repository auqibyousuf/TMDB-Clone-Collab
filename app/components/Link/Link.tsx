import React from "react";
import Link from "next/link";
import { LinkType } from "./LinkTypes";
import classNames from "classnames";

const LinkComponent = ({ text, url, extraClasses }: LinkType) => {
  const linkClasses = classNames(
    "text-[16px] leading-[24px] font-semibold text-white"
  );
  return (
    <Link href={url} className={`${linkClasses} ${extraClasses ?? ""}`}>
      {text}
    </Link>
  );
};

export default LinkComponent;
