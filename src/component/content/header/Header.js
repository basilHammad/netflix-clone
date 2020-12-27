import React from "react";

import classes from "./header.module.css";
import Logo from "../../ui/logo/Logo";
import Button from "../../ui/button/button";
import { MainCont } from "./style";

const Header = ({
  user,
  clickSearchIcon,
  isSearchIconClicked,
  logout,
  filmsOrSeriesHandler,
  searchTerm,
  searchChangedHandler,
}) => {
  const searchInputClass = isSearchIconClicked
    ? [classes.serchInput, classes.active].join(" ")
    : classes.serchInput;

  return (
    <MainCont>
      <header className={classes.headerCont}>
        <div className={classes.nav}>
          <Logo />
          <button
            onClick={(e) => filmsOrSeriesHandler(e)}
            name="films"
            className={classes.link}
          >
            Films
          </button>
          <button
            onClick={(e) => filmsOrSeriesHandler(e)}
            name="series"
            className={classes.link}
          >
            Series
          </button>
        </div>

        <div style={{ display: "flex" }}>
          <button onClick={clickSearchIcon} className={classes.searchIcon}>
            <img src={`/images/icons/search.png`} alt="search icon" />
          </button>
          <input
            placeholder="Search films and series"
            className={searchInputClass}
            type="text"
            value={searchTerm}
            onChange={searchChangedHandler}
          />

          <div className={classes.imgCont}>
            <img
              className={classes.userImage}
              src={`/images/users/${
                user.values.photoURL || Math.floor(Math.random() * 5) + 1
              }.png`}
              alt="user"
            />
          </div>

          <div className={classes.dropDown}>
            <div className={classes.dropDownHeader}>
              <div className={classes.imgCont}>
                <img
                  className={classes.userImage}
                  src={`/images/users/${
                    user.values.photoURL || Math.floor(Math.random() * 5) + 1
                  }.png`}
                  alt="user"
                />
              </div>
              <span
                style={{
                  color: "#fff",
                  display: "inline-block",
                  fontSize: "13px",
                  marginLeft: "25px",
                }}
              >
                {user.values.userName}
              </span>
            </div>
            <button onClick={logout} className={classes.signout}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className={classes.bodyCont}>
        <h1 className={classes.title}>Watch Joker Now</h1>
        <p className={classes.discription}>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks
          connection as he walks the streets of Gotham City. Arthur wears two
          masks -- the one he paints for his day job as a clown, and the guise
          he projects in a futile attempt to feel like he's part of the world
          around him.
        </p>
        <Button btnThem="play">Play</Button>
      </div>
    </MainCont>
  );
};

export default Header;
