import React from "react";
import Logo from "../Logo/Logo";
import { HeaderType } from "@/app/types/Header/HeaderTypes";
import Menu from "../Menu/Menu";
import { LogoType } from "@/app/types/Logo/LogoTypes";
import Link from "next/link";

const Header = ({ logo }: HeaderType) => {
  const menuItems = [
    {
      text: "Movies",
      link: "nolink",
      children: [
        {
          text: "Popular",
          link: "/movie",
          children: null,
        },
        {
          text: "Now Playing",
          link: "/movie/now-playing",
          children: null,
        },
        {
          text: "Up Coming",
          link: "/movie/upcoming",
          children: null,
        },
        {
          text: "Top Rated",
          link: "/movie/top-rated",
          children: null,
        },
      ],
    },
    {
      text: "Tv Shows",
      link: "nolink",
      children: [
        {
          text: "Popular",
          link: "/tv",
          children: null,
        },
        {
          text: "Airing Today",
          link: "/tv/airing-today",
          children: null,
        },
        {
          text: "On TV",
          link: "/tv/on-the-air",
          children: null,
        },
        {
          text: "Top Rated",
          link: "/tv/top-rated",
          children: null,
        },
      ],
    },
    {
      text: "People",
      link: "/person",
      children: null,
    },
  ];
  const rightMenu = [
    {
      linkText: "Login",
      url: "/login",
    },
    {
      linkText: "Join TMDB",
      url: "/signup",
    },
  ];
  return (
    <header className="bg-headerColor h-28 py-3">
      <div className="w-[1220px] px-10 h-full flex items-center mx-auto">
        <Logo imgAlt={logo.imgAlt} imgUrl={logo.imgUrl} />
        {/* <Menu navLinks={navLinks} /> */}
        <nav className="flex w-full justify-between items-center text-lg">
          <ul className="flex">
            {menuItems.map((link) => {
              return (
                <li key={link.text}>
                  <Link
                    className="p-2
            pr-5 text-white"
                    href={link.link}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex">
            {rightMenu.map((link) => {
              return (
                <li key={link.linkText}>
                  <Link
                    className="p-2
            pr-5 text-white"
                    href={link.url}
                  >
                    {link.linkText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
