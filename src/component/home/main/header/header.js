import React from "react";

import Button from "../../../ui/button/button";
import Logo from "../../../ui/logo/Logo";

import classes from "./header.module.css";

const Header = ({ redirectToSignin }) => {
  return (
    <div className={classes.header}>
      <Logo />
      <Button clicked={redirectToSignin} btnThem="signin" btnType="buuton">
        Sign In
      </Button>
    </div>
  );
};

export default Header;
