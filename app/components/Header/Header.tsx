import Logo from "../Logo/Logo";
import { HeaderType } from "@/app/types/Header/HeaderTypes";
import Link from "next/link";
import Button from "../Button/Button";

const Header = ({ logo }: HeaderType) => {
  const menuItems = [
    {
      text: "Movies",
      link: "nolink",
      subMenu: [
        {
          text: "Popular",
          link: "/movie",
        },
        {
          text: "Now Playing",
          link: "/movie/now-playing",
        },
        {
          text: "Up Coming",
          link: "/movie/upcoming",
        },
        {
          text: "Top Rated",
          link: "/movie/top-rated",
        },
      ],
    },
    {
      text: "Tv Shows",
      link: "nolink",
      subMenu: [
        {
          text: "Popular",
          link: "/tv",
        },
        {
          text: "Airing Today",
          link: "/tv/airing-today",
        },
        {
          text: "On TV",
          link: "/tv/on-the-air",
        },
        {
          text: "Top Rated",
          link: "/tv/top-rated",
        },
      ],
    },
    {
      text: "People",
      link: "/person",
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
    <header className="bg-primaryColor h-28 py-3">
      <div className="w-[1220px] px-10 h-full flex items-center mx-auto">
        <Logo imgAlt={logo.imgAlt} imgUrl={logo.imgUrl} />
        {/* <Menu navLinks={navLinks} /> */}
        <nav className="flex w-full justify-between items-center text-base">
          <ul className="flex relative">
            {menuItems.map((link) => {
              return (
                <li
                  key={link.text}
                  className="group p-2
            pr-5 relative"
                >
                  <Link className=" text-white" href={link.link}>
                    {link.text}
                  </Link>
                  {link.subMenu?.length > 0 ? (
                    <ul className="hidden text-black text-base group-hover:block absolute rounded top-10 bg-white w-40 -left-2">
                      {link.subMenu?.map((subMenuItem) => {
                        return (
                          <li key={subMenuItem.text} className="">
                            <Link
                              href={subMenuItem.link}
                              className="py-2 px-4 block hover:bg-slate-200 rounded"
                            >
                              {subMenuItem.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center">
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
            <Button btnUrl="/" variant="search" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
