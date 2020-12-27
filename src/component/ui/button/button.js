import React from "react";

import classes from "./button.module.css";

const Button = ({ btnThem, btnType, clicked, children }) => {
  return (
    <button
      className={[classes.Button, classes[btnThem]].join(" ")}
      type={btnType}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
