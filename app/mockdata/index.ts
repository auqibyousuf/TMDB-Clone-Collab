import { ButtonType } from '../components/Button/ButtonTypes'
import { LinkType } from '../components/Link/LinkTypes'
import { MovieCardTypes } from '../components/MovieCard/MovieCardTypes'
import { NavListType } from '../components/NavList/NavListType'

export const buttonsList: ButtonType[] = [
  {
    text: 'Today',
  },
  {
    text: 'This Week',
  },
]
export const navMenu = [
  {
    text: 'Movies',
    url: 'nourl',
    subMenu: [
      {
        text: 'Popular',
        url: '/movie',
      },
      {
        text: 'Now Playing',
        url: '/movie/now-playing',
      },
      {
        text: 'Up Coming',
        url: '/movie/upcoming',
      },
      {
        text: 'Top Rated',
        url: '/movie/top-rated',
      },
    ],
  },
  {
    text: 'Tv Shows',
    url: 'nourl',
    subMenu: [
      {
        text: 'Popular',
        url: '/tv',
      },
      {
        text: 'Airing Today',
        url: '/tv/airing-today',
      },
      {
        text: 'On TV',
        url: '/tv/on-the-air',
      },
      {
        text: 'Top Rated',
        url: '/tv/top-rated',
      },
    ],
  },
  {
    text: 'People',
    url: '/person',
  },
]
export const footerMenus: Array<NavListType> = [
  {
    title: 'THE BASICS',
    variant: 'footer',
    menuLinks: [
      { text: 'About TMDB', url: '/about' },
      { text: 'Contact Us', url: '/contact' },
      { text: 'Support Forums', url: '/supportforums' },
      { text: 'API', url: '/api' },
      { text: 'System Status', url: '/status' },
    ],
  },
  {
    title: 'GET INVOLVED',
    menuLinks: [
      { text: 'Contribution Bible', url: '/' },
      { text: 'Add New Movie', url: '/' },
      { text: 'Add New TV Show', url: '/' },
    ],
    variant: 'footer',
  },
  {
    title: 'COMMUNITY',
    menuLinks: [
      { text: 'Guidelines', url: '/guidelines' },
      { text: 'Discussions', url: '/discussions' },
      { text: 'Leaderboard', url: '/leaderboard' },
      { text: 'Twitter', url: '/twitter' },
    ],
    variant: 'footer',
  },
  {
    title: 'LEGAL',
    menuLinks: [
      { text: 'Terms of Use', url: '/' },
      { text: 'API Terms of Use', url: '/' },
      { text: 'Privacy Policy', url: '/' },
      { text: 'DMCA Takedown Request', url: '/' },
    ],
    variant: 'footer',
  },
]

export const MenuPopOverLinks = {
  links: [
    {
      text: '1',
      url: '#',
    },
    {
      text: '1',
      url: '#',
    },
    {
      text: '1',
      url: '#',
    },
  ],
}
export const searchList = [
  {
    text: 'Movies',
    url: '#',
  },
  {
    text: 'People',
    url: '#',
  },
  {
    text: 'TV Shows',
    url: '/person',
  },
  {
    text: 'Collections',
    url: '#',
  },
]

export const searchMoviesList = [
  {
    cardImage: {
      imgSrc: 'https://loremflickr.com/94/141',
      imgAlt: 'card image',
    },
    title: 'Meg 2: The Trench',
    date: 'August 4, 2023',
    description:
      'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
  },
  {
    cardImage: {
      imgSrc: 'https://loremflickr.com/94/141',
      imgAlt: 'card image',
    },
    title: 'Meg 2: The Trench',
    date: 'August 4, 2023',
    description:
      'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
  },
  {
    cardImage: {
      imgSrc: 'https://loremflickr.com/94/141',
      imgAlt: 'card image',
    },
    title: 'Meg 2: The Trench',
    date: 'August 4, 2023',
    description:
      'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
  },
  {
    cardImage: {
      imgSrc: 'https://loremflickr.com/94/141',
      imgAlt: 'card image',
    },
    title: 'Meg 2: The Trench',
    date: 'August 4, 2023',
    description:
      'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
  },

  {
    cardImage: {
      imgSrc: 'https://loremflickr.com/94/141',
      imgAlt: 'card image',
    },
    title: 'Meg 2: The Trench',
    date: 'August 4, 2023',
    description:
      'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
  },
]
