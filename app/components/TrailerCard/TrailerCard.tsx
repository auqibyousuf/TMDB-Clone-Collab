/* eslint-disable @next/next/no-img-element */
import React from "react";

const TrailerCard = ({ title, poster_path, name }: any) => {
  const img_200 = "https://image.tmdb.org/t/p/w200";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  return (
    <div key={title} className="h-full relative w-56">
      <img
        src={poster_path ? `${img_200}${poster_path}` : unavailable}
        alt={title ? title : name}
        width={220}
        height={330}
        className="relative"
      />
      <div>
        <p className=" font-bold">{title ? title : name}</p>
      </div>
    </div>
  );
};

export default TrailerCard;
