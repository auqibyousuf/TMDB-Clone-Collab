"use client";
import { useEffect, useState } from "react";

const MovieList = ({ title, items, bgUrl }: any) => {
  const [movieItems, setMovieItems] = useState();

  const filters = [
    {
      name: "Today",
      value: "day",
    },
    {
      name: "This week",
      value: "day",
    },
  ];
  return <div></div>;
};

export default MovieList;
