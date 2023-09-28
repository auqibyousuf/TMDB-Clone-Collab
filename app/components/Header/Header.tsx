import React from "react";
import { HeaderType } from "./HeaderTypes";
import classNames from "classnames";
import NavBar from "../NavBar/NavBar";
import { Logo } from "../Logo/Logo";

const Header = ({ logo, menu, ActionIcon, extraClasses }: HeaderType) => {
  const navBarClasses = classNames(
    "flex gap-4 items-center max-w-[1440px] w-full px-10 h-full flex"
  );
  const headerClasses = classNames(
    "bg-darkBlue h-28 py-3 w-full justify-center flex items-center"
  );
  const iconClasses = classNames("text-lightBlue w-5 h-5 pointer  ml-auto");

  return (
    <header className={`${headerClasses} ${extraClasses ?? ""}`}>
      <nav className={navBarClasses}>
        <Logo
          imgSrc={logo.imgSrc}
          altText={logo.altText}
          extraClasses="mr-4"
          url={logo.url}
        />
        <NavBar
          menuLinks={menu.menuLinks}
          listContainerExtraClasses={menu.listContainerExtraClasses}
          listItemExtraClasses={menu.listItemExtraClasses}
        />
        <ActionIcon className={iconClasses} />
      </nav>
    </header>
  );
};

export default Header;
