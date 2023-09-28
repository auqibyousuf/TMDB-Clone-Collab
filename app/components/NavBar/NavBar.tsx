import React from "react";
import { NavBarType } from "./NavBarTypes";
import LinkComponent from "../Link/Link";
import classNames from "classnames";

const NavBar = ({ menuLinks, extraClasses }: NavBarType) => {
  const navBarClasses = classNames(
    "flex w-full justify-between items-center text-base"
  );
  const listContainerClasses = classNames("flex relative");
  const listItemClasses = classNames("group p-2 pr-5 relative");
  return (
    <nav className={navBarClasses}>
      <ul className={listContainerClasses}>
        {menuLinks.map((linkItem) => {
          const { text, url } = linkItem;
          return (
            <li key={text} className={listItemClasses}>
              <LinkComponent url={url} text={text} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
