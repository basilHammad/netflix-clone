import React from "react";
import { Link } from "react-router-dom";

import linksData from "../../../../fixtures/links.json";
import classes from "./links.module.css";

const Links = () => {
  return linksData.map((link) => {
    return (
      <li key={link.id} className={classes.listItem}>
        <Link className={classes.link} to={link.link}>
          {link.linkName}
        </Link>
      </li>
    );
  });
};

export default Links;
