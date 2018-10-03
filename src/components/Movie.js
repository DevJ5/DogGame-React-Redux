import React from "react";

export function Movie() {
  // noinspection HtmlUnknownAttribute
  return <div className="video-background">
    <div className="video-foreground">
      <iframe
        src="https://www.youtube.com/embed/7ZIjkvdz4Ko?rel=0&controls=0&showinfo=0&;start=3;&autoplay=1;stop=.10"
        allow="autoplay; encrypted-media"
      />
    </div>
  </div>;
}