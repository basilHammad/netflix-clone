import React from "react";

import classes from "./faqitem.module.css";

const FaqItem = ({ clicked, header, show, body }) => {
  const itemClass = show
    ? [classes.item, classes.ItemOpen].join(" ")
    : classes.item;
  const imgClass = show
    ? [classes.addIcon, classes.rotateImg].join(" ")
    : classes.addIcon;
  return (
    <>
      <div onClick={clicked} className={itemClass}>
        {header}
        <img className={imgClass} src="images/icons/add.png" alt="add" />
      </div>
      {show ? <div className={classes.body}>{body}</div> : null}
    </>
  );
};

export default FaqItem;
