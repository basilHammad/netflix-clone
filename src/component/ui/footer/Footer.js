import React from "react";

import Links from "../../ui/footer/links/links";
import classes from "./footer.module.css";

const Footer = ({ footerThem }) => {
  let footerClass;
  if (footerThem === "secondary") {
    footerClass = [classes.cont, classes.secondary].join(" ");
  } else {
    footerClass = [classes.cont, classes.primary].join(" ");
  }
  return (
    <div className={footerClass}>
      <ul className={classes.list}>
        <Links />;
      </ul>
    </div>
  );
};

export default Footer;
