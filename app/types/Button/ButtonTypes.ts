import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export type ButtonType = {
  btnText?: string;
  btnUrl: string;
  variant: "search" | "join";
  icon?: IconType;
  clickHandler?: MouseEventHandler<HTMLAnchorElement>;
};
