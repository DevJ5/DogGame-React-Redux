import React from "react";

export function Movie() {
  // noinspection HtmlUnknownAttribute
  return (
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          title="dogs-alive"
          src="https://www.youtube.com/embed/7ZIjkvdz4Ko?rel=0&controls=0&showinfo=0&end=175&autoplay=1&mute=1&loop=1;start=3&playlist=7ZIjkvdz4Ko;;"
          alt=""
          allow="autoplay; encrypted-media"
        />
      </div>
    </div>
  );
}
