import React from "react";

import classes from "./cards.module.css";
import Card from "./card/Card";
import CardDetails from "./card/cardDetails/CardDetails";

const Cards = ({
  data,
  filmsOrSeries,
  subCategory,
  contentClickHandler,
  playClickHandler,
}) => {
  return (
    <div className={classes.cards}>
      <div className={classes.cardsCont}>
        {data.map((item) => (
          <Card
            key={item.id}
            subCategory={subCategory}
            filmsOrSeries={filmsOrSeries}
            data={item}
            contentClickHandler={contentClickHandler}
            showContentDetails={item.showContentDetails}
          />
        ))}
      </div>

      {data.map((item) => (
        <CardDetails
          key={item.id}
          subCategory={subCategory}
          filmsOrSeries={filmsOrSeries}
          data={item}
          contentClickHandler={contentClickHandler}
          showContentDetails={item.showContentDetails}
          playClickHandler={playClickHandler}
        />
      ))}
    </div>
  );
};

export default Cards;
