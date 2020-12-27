import React from "react";

import classes from "./card.module.css";

const Card = ({ direction, title, subTitle, image, alt }) => {
  return (
    <>
      <div className={classes.cont} style={{ flexDirection: direction }}>
        <div className={classes.subCont}>
          <div className={classes.textCont}>
            <h1 className={classes.title}>{title}</h1>
            <h3 className={classes.subTitle}>{subTitle}</h3>
          </div>
        </div>
        <div className={classes.imageCont}>
          <img className={classes.image} src={image} alt={alt} />
        </div>
      </div>
    </>
  );
};

export default Card;
