import { HeadingTypes } from "../Heading/HeadingTypes";
import { LogoType } from "../Logo/LogoTypes";
import { NavBarType } from "../NavBar/NavBarType";

export type FooterType = {
  logo: LogoType;
  menus: Array<NavBarType>;
  extraClasses?: string;
};
