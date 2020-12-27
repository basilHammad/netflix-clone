import React from "react";

import Header from "./header/header";
import GetStarted from "../getStarted/GetStarted";
import classes from "./main.module.css";
import { MainCont } from "./style";

const Main = ({ errors, submit, values, changed, input, redirectToSignin }) => {
  return (
    <MainCont>
      <Header redirectToSignin={redirectToSignin} />
      <div className={classes.center}>
        <h1 className={classes.MainHeading}>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className={classes.secHeading}>Watch anywhere. Cancel anytime.</h2>
        <GetStarted
          errors={errors}
          submit={submit}
          values={values}
          changed={changed}
          input={input}
        />
      </div>
    </MainCont>
  );
};

export default Main;
