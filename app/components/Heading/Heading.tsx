import React from "react";
import { HeadingTypes } from "./HeadingTypes";
import classnames from "classnames";

const Heading = ({ text, variant, extraClasses }: HeadingTypes) => {
  let DynamicHeading = "h1" as keyof JSX.IntrinsicElements;
  switch (variant) {
    case "20":
      DynamicHeading = "h6";
      break;
    case "22":
      DynamicHeading = "h5";
      break;
    case "24":
      DynamicHeading = "h4";
      break;
    case "32":
      DynamicHeading = "h3";
      break;
    case "36":
      DynamicHeading = "h2";
      break;
    case "48":
      DynamicHeading = "h1";
      break;
  }

  const headingClasses = classnames({
    "text-[20px] leading-[24px]": variant == "20",
    "text-[22px] leading-[28px]": variant == "22",
    "text-[24px] leading-[30px]": variant == "24",
    "text-[32px] leading-[40px]": variant == "32",
    "text-[36px] leading-[44px]": variant == "36",
    "text-[48px] leading-[48px]": variant == "48",
  });
  return (
    <DynamicHeading className={`${headingClasses} ${extraClasses ?? ""}`}>
      {text}
    </DynamicHeading>
  );
};

export default Heading;
