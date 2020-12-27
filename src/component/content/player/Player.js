import React from "react";
import ReactDOM from "react-dom";

import classes from "./player.module.css";

const Player = ({ showPlayer, closePlayerClickHandler }) => {
  return showPlayer
    ? ReactDOM.createPortal(
        <div className={classes.overlay}>
          <div className={classes.inner}>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <button
              onClick={closePlayerClickHandler}
              className={classes.close}
            ></button>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Player;
