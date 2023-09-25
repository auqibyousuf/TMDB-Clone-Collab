import { IconType } from "react-icons";
import { ButtonType } from "../LinkButton/LinkButtonTypes";
import { InputFieldTypes } from "../InputField/InputFieldTypes";

export type SearchTypes = {
  searchBar: ButtonType;
  icon?: IconType;
  searchVariant: "icon" | "searchBar";
  searchPlaceholder: InputFieldTypes;
};
