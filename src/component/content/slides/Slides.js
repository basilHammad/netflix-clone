import React from "react";

import Slide from "./slide/Slide";

const Slides = ({
  slideRows,
  filmsOrSeries,
  contentClickHandler,
  playClickHandler,
}) => {
  return (
    <>
      {slideRows.map((row) => (
        <Slide
          filmsOrSeries={filmsOrSeries}
          key={row.title}
          subCategory={row.title}
          data={row.data}
          contentClickHandler={contentClickHandler}
          playClickHandler={playClickHandler}
        />
      ))}
    </>
  );
};

export default Slides;
