import React from "react";

import Button from "../../ui/button/button";
import classes from "./getStarted.module.css";

const Signeup = ({ values, changed, submit, errors, input }) => {
  return (
    <>
      <h3 className={classes.title}>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form className={classes.form} onSubmit={submit}>
        <input
          ref={input}
          className={classes.signUp}
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => changed(e)}
          placeholder="Email address"
        />

        <Button btnType="submit" btnThem="getStarted">
          GET STARTED
        </Button>
      </form>
      {errors && <p className={classes.error}>{errors.email}</p>}
    </>
  );
};

export default Signeup;
