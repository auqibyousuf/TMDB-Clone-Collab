import Image from "next/image";
import React from "react";
import LinkButton from "../LinkButton/LinkButton";

const CTABanner = ({ title, body, link, bg_Img, extras }: any) => {
  return (
    <div className="bg-ctaImage text-white">
      <div className="w-[1440px] mx-auto py-8">
        <h5 className="text-4xl font-bold mb-5">{title}</h5>
        <div className="flex gap-x-5">
          <div>
            <p className="text-xl font-normal mb-6">{body}</p>
            <LinkButton
              btnText="Sign Up"
              btnUrl="#"
              variant="signup"
            ></LinkButton>
          </div>

          <p className="text-base font-normal">{extras}</p>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
