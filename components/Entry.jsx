import React from "react";

export default function Entry({ image, name, type, background }) {
  return (
    <div className="entry">
      <div className={`image w-auto h-96 md:h-96 ${background} mb-2`}></div>
      <div className="description">
        <p className="leading-tight mb-2">{name}</p>
        <p className="leading-tight opacity-60">{type}</p>
      </div>
    </div>
  );
}
