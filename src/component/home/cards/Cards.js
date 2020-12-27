import React from "react";

import Card from "./card/Card";

import cardsData from "../../../fixtures/cards.json";
import classes from "./cards.module.css";

const Cards = () => {
  return (
    <div className={classes.mainCont}>
      {cardsData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          alt={item.alt}
          direction={item.direction}
        />
      ))}
    </div>
  );
};

export default Cards;
