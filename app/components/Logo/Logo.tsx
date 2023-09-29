import Image from "next/image";
import React from "react";
import { LogoType } from "./LogoTypes";
import Link from "next/link";

export const Logo = ({ imgSrc, url, altText, extraClasses }: LogoType) => {
  return (
    <Link href={url} className={extraClasses ?? ""}>
      <Image src={imgSrc} alt={altText} width={150} height={50} />
    </Link>
  );
};
