import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export type ButtonType = {
  btnText: string;
  btnUrl: string;
  variant?: "join" | "search" | "switch";
  clickHandler?: MouseEventHandler<HTMLAnchorElement>;
};
