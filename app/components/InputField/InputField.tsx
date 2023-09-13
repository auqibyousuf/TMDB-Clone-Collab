import { InputFieldTypes } from "@/app/types/InputField/InputFieldTypes";
import React from "react";

const InputField = ({ placeholder, extraClasses, type }: InputFieldTypes) => {
  return (
    <input type={type} placeholder={placeholder} className={extraClasses} />
  );
};

export default InputField;
