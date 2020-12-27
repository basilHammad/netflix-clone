import React from "react";

import classes from "./slide.module.css";
import Cards from "./cards/Cards";

const Slide = ({
  subCategory,
  data,
  filmsOrSeries,
  contentClickHandler,
  playClickHandler,
}) => {
  return (
    <div className={classes.slide}>
      <h2 className={classes.subCategory}>{subCategory}</h2>
      <Cards
        subCategory={subCategory}
        data={data}
        filmsOrSeries={filmsOrSeries}
        contentClickHandler={contentClickHandler}
        playClickHandler={playClickHandler}
      />
    </div>
  );
};

export default Slide;
