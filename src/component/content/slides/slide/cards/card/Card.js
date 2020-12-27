import React from "react";

import classes from "./card.module.css";

const Card = ({ data, filmsOrSeries, subCategory, contentClickHandler }) => {
  return (
    <>
      <div
        onClick={(e) => contentClickHandler(e)}
        id={data.id}
        className={classes.imgCont}
      >
        <img
          className={classes.contentImg}
          alt={data.title}
          id={data.id}
          src={`/images/${filmsOrSeries}/${data.genre}/${data.slug}/small.jpg`}
        />
        <div className={classes.descriptionCont}>
          <h3 className={classes.title} id={data.id}>
            {data.title}{" "}
          </h3>
          <p className={classes.description} id={data.id}>
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
