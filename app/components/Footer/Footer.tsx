import { FooterType } from "@/app/types/Footer/FooterTypes";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import classNames from "classnames";

const Footer = ({ logoSrc }: FooterType) => {
  const footerClasses = classNames({});

  const footerMenu = [
    {
      text: "The Basics",
      link: "nolink",
      children: [
        {
          text: "About TMDB",
          link: "",
          children: null,
        },
        {
          text: "Contact Us",
          link: "/movie/now-playing",
          children: null,
        },
        {
          text: "Support Forums",
          link: "/movie/upcoming",
          children: null,
        },
        {
          text: "API",
          link: "/movie/top-rated",
          children: null,
        },
      ],
    },
    {
      text: "Get Involved",
      link: "nolink",
      children: [
        {
          text: "Contribution Bible",
          link: "/tv",
          children: null,
        },
        {
          text: "Add New Movie",
          link: "/tv/airing-today",
          children: null,
        },
        {
          text: "Add New TV Show",
          link: "/tv/on-the-air",
          children: null,
        },
      ],
    },
    {
      text: "Community",
      link: "nolink",
      children: [
        {
          text: "Guidelines",
          link: "/tv",
          children: null,
        },
        {
          text: "Discussions",
          link: "/tv/airing-today",
          children: null,
        },
        {
          text: "Leaderboard",
          link: "/tv/on-the-air",
          children: null,
        },
      ],
    },
    {
      text: "Legal",
      link: "nolink",
      children: [
        {
          text: "Terms of Use",
          link: "",
          children: null,
        },
        {
          text: "API Terms of Use",
          link: "",
          children: null,
        },
        {
          text: "Privacy Policy",
          link: "",
          children: null,
        },
        {
          text: "DMCA Takedown Request",
          link: "",
          children: null,
        },
      ],
    },
  ];
  return (
    <footer className="bg-primaryColor text-white fixed w-full bottom-0 ">
      <div className="flex justify-between h-96 items-center max-w-[1440px] m-auto px-10 ">
        <div className="mr-10 flex flex-col items-end -mt-12">
          <Image
            src={logoSrc}
            width={130}
            height={95}
            alt="footer-logo"
            className="mb-12"
          />
          <Button btnText="Join the Community" btnUrl="" variant="join" />
        </div>

        <nav className="" id="footer-menu">
          <ul className="flex">
            {footerMenu.map((menu) => {
              return (
                <li key={menu.text} className="mr-8 last:mr-0">
                  <span className="uppercase font-bold">{menu.text}</span>
                  <ul className="font-normal">
                    {menu.children.length > 0
                      ? menu.children.map((subMenu) => {
                          return (
                            <li key={subMenu.text} className="text-base">
                              <Link href={subMenu.link} aria-label={menu.text}>
                                {subMenu.text}
                              </Link>
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
