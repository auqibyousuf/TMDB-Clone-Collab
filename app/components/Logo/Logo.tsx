import { LogoType } from "@/app/types/Logo/LogoTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ imgUrl, imgAlt }: LogoType) => {
  return (
    <Link href="/" className="mr-4">
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={160}
        height={20}
        className="mr-4"
      />
    </Link>
  );
};

export default Logo;
