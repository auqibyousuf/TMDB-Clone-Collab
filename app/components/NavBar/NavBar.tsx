import React from "react";
import { NavBarType } from "./NavBarTypes";
import LinkComponent from "../Link/Link";
import classNames from "classnames";

const NavBar = ({
  menuLinks,
  listItemExtraClasses,
  listContainerExtraClasses,
}: NavBarType) => {
  const listContainerClasses = classNames("flex relative gap-4");
  const listItemClasses = classNames("group flex relative");
  return (
    <ul
      className={`${listContainerClasses} ${listContainerExtraClasses ?? ""}`}
    >
      {menuLinks.map((linkItem, index) => {
        const { text, url } = linkItem;
        return (
          <li
            key={index}
            className={`${listItemClasses} ${listItemExtraClasses ?? ""}`}
          >
            <LinkComponent url={url} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
