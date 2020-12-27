import React from "react";

import { BigSpinner, SmallSpinner, SmallSpinnerImg } from "./style";
const Spinner = ({ children, page }) => {
  if (page === "profile") return <BigSpinner>{children}</BigSpinner>;
  if (page === "signin" || page === "signup") {
    return (
      <SmallSpinner>
        <SmallSpinnerImg />
      </SmallSpinner>
    );
  }
};

export default Spinner;
