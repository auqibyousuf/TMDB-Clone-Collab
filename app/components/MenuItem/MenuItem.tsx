"use client";
import { MenuItemType } from "@/app/types/Menu/MenuTypes";
import Link from "next/link";

const MenuItem = ({ navLinks }: MenuItemType) => {
  return (
    <ul>
      {navLinks.map((links) => {
        return (
          <li key={links.text}>
            <Link
              className="p-2
            pr-5 text-white"
              href={links.link}
            >
              {links.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItem;
