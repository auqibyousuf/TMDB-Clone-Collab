import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export type LinkButtonType = {
  btnText: string;
  btnUrl: string;
  variant?: "join" | "search" | "signup";
  clickHandler?: MouseEventHandler<HTMLAnchorElement>;
};
