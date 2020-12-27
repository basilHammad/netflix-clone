import React, { useContext, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Profile from "../../component/content/profile/Profile";
import firebaseContext from "../../context/firebaseContext/firebaseContext";
import formContext from "../../context/formContext/formContext";
import Header from "../../component/content/header/Header";
import Slides from "../../component/content/slides/Slides";
import classes from "./content.module.css";
import Footer from "../../component/ui/footer/Footer";
import Player from "../../component/content/player/Player";
import useAuthListener from "../../hooks/useAuthListener";

const Content = ({ category }) => {
  const [showProfileSpinner, setShowProfileSpinner] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filmsOrSeries, setFilmsOrSeries] = useState("films");
  const [slideRows, setSlideRows] = useState([]);
  const [showPlayer, setShowPlayr] = useState(false);

  const firebase = useContext(firebaseContext);
  const form = useContext(formContext);
  const history = useHistory();
  const { user } = useAuthListener();

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const result = fuse.search(searchTerm).map((res) => {
      return res.item;
    });
    if (slideRows.length > 0 && searchTerm.length > 3 && result.length > 0) {
      return setSlideRows(result);
    }
    return setSlideRows(category[filmsOrSeries]);
  }, [searchTerm]);

  useEffect(() => {
    setSlideRows(category[filmsOrSeries]);
  }, [category, filmsOrSeries]);

  const profileClickedHandler = () => {
    setShowProfileSpinner(true);
    setTimeout(() => {
      setShowProfile(false);
    }, 1000);
  };

  const searchIconClickedHandler = () => {
    setIsSearchIconClicked((isSearchIconClicked) => !isSearchIconClicked);
  };

  const searchChangedHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const logout = () => {
    firebase.auth().signOut();
    localStorage.removeItem("/authuser");
    history.push("/");
  };

  const filmsOrSeriesHandler = (e) => {
    const { name } = e.target;
    setFilmsOrSeries(name);
  };

  const contentClickHandler = (e) => {
    let showContentDetails = false;
    const updatedSlideRows = slideRows.map((row) => {
      return {
        ...row,
        data: row.data.map((item) => {
          return e.target.id === item.id
            ? { ...item, showContentDetails: !showContentDetails }
            : { ...item, showContentDetails: false };
        }),
      };
    });
    setSlideRows(updatedSlideRows);
  };

  const playClickHandler = () => {
    setShowPlayr(true);
  };

  const closePlayerClickHandler = () => {
    setShowPlayr(false);
  };

  if (!user) return <Redirect to="/" />;

  return (
    <div className={classes.mainCont}>
      {showProfile ? (
        <Profile
          showProfileSpinner={showProfileSpinner}
          clicked={profileClickedHandler}
          user={form}
        />
      ) : (
        <>
          <Header
            logout={logout}
            isSearchIconClicked={isSearchIconClicked}
            searchTerm={searchTerm}
            searchChangedHandler={searchChangedHandler}
            clickSearchIcon={searchIconClickedHandler}
            filmsOrSeriesHandler={filmsOrSeriesHandler}
            user={form}
          />
          <Slides
            contentClickHandler={contentClickHandler}
            filmsOrSeries={filmsOrSeries}
            slideRows={slideRows}
            playClickHandler={playClickHandler}
          />
          <Player
            showPlayer={showPlayer}
            closePlayerClickHandler={closePlayerClickHandler}
          />
          <Footer footerThem="primary" />
        </>
      )}
    </div>
  );
};

export default Content;
