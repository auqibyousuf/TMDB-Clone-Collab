import { SubMenuItemTypes } from "@/app/types/SubMenuItem/SubMenuItem";
import Link from "next/link";
import React from "react";

const SubMenuItem = () => {
  const mainHeaderSubMenuItems = [{}];

  return (
    <ul>
      {subMenuItems.map((link) => {
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

export default SubMenuItem;
