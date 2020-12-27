import React from "react";

import FaqItem from "./FaqItem/FaqItem";
import classes from "./faqList.module.css";

const FaqList = ({ faqData, clicked }) => {
  return (
    <div className={classes.listCont}>
      {faqData.map((item) => (
        <FaqItem
          header={item.header}
          body={item.body}
          show={item.showBody}
          key={item.id}
          clicked={() => clicked(item.id, item.showBody)}
        />
      ))}
    </div>
  );
};

export default FaqList;
