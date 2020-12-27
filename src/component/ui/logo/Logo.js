import React from "react";

import classes from "./logo.module.css";

const Logo = ({ page, cliked }) => {
  return (
    <div className={[classes.logo, classes[page]].join(" ")} onClick={cliked}>
      <img
        className={classes.logoImage}
        src="/images/misc/logo.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Logo;
