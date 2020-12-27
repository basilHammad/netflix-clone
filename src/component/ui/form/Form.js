import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/button";
import Spinner from "../spinner/Spinner";
import classes from "./form.module.css";

const Form = ({
  values,
  changed,
  submit,
  errors,
  page,
  fireBaseErrors,
  isLoading,
}) => {
  let ButtonContent;
  if (isLoading) {
    ButtonContent = <Spinner page={page} />;
  } else {
    ButtonContent = page === "signin" ? "Sign In" : "Sign Up";
  }
  return (
    <form className={classes.form} onSubmit={submit}>
      <h1>{page === "signin" ? "Sign In" : "Sign Up"}</h1>
      {fireBaseErrors ? (
        <p className={classes.firebase}>{fireBaseErrors}</p>
      ) : null}
      {page === "signup" ? (
        <>
          <input
            className={classes.input}
            type="text"
            name="userName"
            value={values.userName}
            onChange={(e) => changed(e)}
            placeholder="Enter your name"
          />
          {errors ? <p className={classes.errors}>{errors.userName}</p> : null}
        </>
      ) : null}
      <input
        className={classes.input}
        type="text"
        name={"email"}
        value={values.email}
        onChange={(e) => changed(e)}
        placeholder="Email addresss "
      />
      {errors.email !== "" ? (
        <p className={classes.errors}>{errors.email}</p>
      ) : null}
      <input
        className={classes.input}
        type="password"
        name={"password"}
        value={values.password}
        onChange={(e) => changed(e)}
        placeholder="Password"
      />
      {errors ? <p className={classes.errors}>{errors.password}</p> : null}

      <Button btnType="submit" btnThem="signinPage">
        {ButtonContent}
      </Button>
      {page === "signin" ? (
        <span className={classes.new}>
          New to Netflix?
          <Link className={classes.link} to={"/signup"}>
            Sign up now.
          </Link>
        </span>
      ) : (
        <span className={classes.new}>
          Have an account?
          <Link className={classes.link} to={"/signin"}>
            Sign in now.
          </Link>
        </span>
      )}
      <p className={classes.text}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </p>
    </form>
  );
};

export default Form;
