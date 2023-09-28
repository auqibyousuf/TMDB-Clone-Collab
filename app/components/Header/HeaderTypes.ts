import { IconType } from "react-icons";
import { LogoType } from "../Logo/LogoTypes";
import { NavBarType } from "../NavBar/NavBarTypes";

export type HeaderType = {
  logo: LogoType;
  menu: NavBarType;
  ActionIcon: IconType;
  extraClasses?: string;
};
