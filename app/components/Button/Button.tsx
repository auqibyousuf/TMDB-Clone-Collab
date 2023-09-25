import { ButtonType } from "@/app/types/Button/ButtonType";
import React from "react";

const Button = ({ btnVal, btnText, btnType, clickHandler }: ButtonType) => {
  return (
    <button
      value={btnVal}
      type={btnType}
      onClick={clickHandler}
      className="rounded-3xl bg-green px-5"
    >
      {btnText}
    </button>
  );
};

export default Button;
