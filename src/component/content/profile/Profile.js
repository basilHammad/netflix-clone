import React from "react";

import Logo from "../../ui/logo/Logo";
import Spinner from "../../ui/spinner/Spinner";
import classes from "./profile.module.css";

const Profile = ({ user, showProfileSpinner, clicked }) => {
  return (
    <div className={classes.cont}>
      <header className={classes.header}>
        <Logo page="profile" />
      </header>
      <h1 className={classes.title}>Who's watching?</h1>
      {showProfileSpinner ? (
        <Spinner page="profile">
          <img
            className={classes.spinnerImg}
            src={`/images/users/${
              user.values.photoURL || Math.floor(Math.random() * 5) + 1
            }.png`}
            alt="user"
          />
        </Spinner>
      ) : null}
      <div>
        <div className={classes.userCont}>
          <img
            onClick={clicked}
            className={classes.userImage}
            src={`/images/users/${
              user.values.photoURL || Math.floor(Math.random() * 5) + 1
            }.png`}
            alt="user"
          />
          <p className={classes.userName}>{user.values.userName}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
