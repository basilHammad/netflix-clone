import React from "react";

import classes from "./cardDetails.module.css";

const CardDetails = ({
  data,
  filmsOrSeries,
  subCategory,
  playClickHandler,
}) => {
  let maturityClass;
  if (+data.maturity >= 15) {
    maturityClass = [classes.maturity, classes.redMaturit].join(" ");
  } else {
    maturityClass = [classes.maturity, classes.greenMaturit].join(" ");
  }
  return (
    <>
      {data.showContentDetails ? (
        <div
          style={{
            backgroundImage: `url(/images/${filmsOrSeries}/${subCategory}/${data.slug}/large.jpg)`,
          }}
          className={classes.detailsCont}
          id={data.id}
        >
          <div className={classes.detailsContent}>
            <h2 className={classes.title}>{data.title}</h2>
            <p className={classes.description}>{data.description}</p>
            <div className={classes.maturityCont}>
              <div className={maturityClass}>
                {+data.maturity === 0 ? "PG" : data.maturity}
              </div>
              <span className={classes.subCategory}>{subCategory}</span>
            </div>
            <button onClick={playClickHandler} className={classes.play}>
              Play
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardDetails;
