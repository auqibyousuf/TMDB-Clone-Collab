import { SubMenuItemTypes } from "@/app/types/SubMenuItem/SubMenuItem";
import Link from "next/link";
import React from "react";

const SubMenuItem = () => {
  const mainHeaderSubMenuItems = [{}];
  const footerSubMenuItems = [
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
  ];
  return (
    <ul>
      {subMenuItems.map((link) => {
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
  );
};

export default SubMenuItem;
