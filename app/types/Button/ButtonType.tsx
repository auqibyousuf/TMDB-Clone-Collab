import { MouseEventHandler } from "react";

export type ButtonType = {
  btnVal: string;
  btnText: string;
  btnType: "button" | "submit" | "reset";
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};
