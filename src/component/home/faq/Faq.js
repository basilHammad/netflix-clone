import React from "react";

import FaqList from "./FaqList/Faqlist";
import GetStarted from "../getStarted/GetStarted";
import classes from "./faq.module.css";

const Faq = ({ faqData, clicked, errors, submit, values, changed, isOpen }) => {
  return (
    <div className={classes.mainCont}>
      <h1 className={classes.mainHeading}>Frequently Asked Questions</h1>
      <FaqList isOpen={isOpen} faqData={faqData} clicked={clicked} />
      <div className={classes.formCont}>
        <GetStarted
          errors={errors}
          submit={submit}
          values={values}
          changed={(e) => changed(e)}
        />
      </div>
    </div>
  );
};

export default Faq;
