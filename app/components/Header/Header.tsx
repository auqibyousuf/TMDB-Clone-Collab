import React from "react";
import { HeaderType } from "./HeaderTypes";
import classNames from "classnames";
import NavBar from "../NavBar/NavBar";
import { Logo } from "../Logo/Logo";

const Header = ({ logo, menu, ActionIcon, extraClasses }: HeaderType) => {
  const navBarClasses = classNames(
    "flex gap-4 items-center w-[1440px] px-10 h-full flex mx-auto"
  );
  const headerClasses = classNames(
    "bg-darkBlue h-28 py-3 w-full flex justify-center items-center"
  );
  const headerChildClasses = classNames("");
  const iconClasses = classNames(
    "text-white w-5 h-5 pointer fill-white ml-auto"
  );

  return (
    <header className={`${headerClasses} ${extraClasses ?? ""}`}>
      <div className={headerChildClasses}>
        <nav className={navBarClasses}>
          <Logo
            imgSrc={logo.imgSrc}
            altText={logo.altText}
            extraClasses="mr-4"
            url={logo.url}
          />
          <NavBar menuLinks={menu.menuLinks} extraClasses={menu.extraClasses} />
          <ActionIcon className={iconClasses} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
