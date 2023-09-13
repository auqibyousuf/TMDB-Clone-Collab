"use client";
import { MenuItemType } from "@/app/types/Menu/MenuTypes";
import Link from "next/link";

const Menu = (navLinks: MenuItemType[]) => {
  return (
    <ul>
      {navLinks.map((link) => {
        return (
          <li key={link.text}>
            <Link
              className="p-2
            pr-5 text-white"
              href={link.link}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
