import React from "react";

export default function Entry({ image, name, type, background }) {
  return (
    <div className="entry transition-all  cursor-pointer hover:scale-105">
      <div className={`image w-auto h-96 md:h-96 ${background} mb-2`}></div>
      <div className="description">
        <p className="leading-tight L,JN MJN MNHJKN mb-1">{name}</p>
        <p className="leading-tight opacity-60">{type}</p>
      </div>
    </div>
  );
}
