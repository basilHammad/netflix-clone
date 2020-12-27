import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

import Form from "../../component/ui/form/Form";
import Footer from "../../component/ui/footer/Footer";
import Logo from "../../component/ui/logo/Logo";
import formContext from "../../context/formContext/formContext";
import firebaseContext from "../../context/firebaseContext/firebaseContext";
import { Cont, Header } from "./style";
import useAuthListener from "../../hooks/useAuthListener";

const Signup = () => {
  const [firebaseErrors, setFirebaseErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useContext(formContext);
  const firebase = useContext(firebaseContext);

  const history = useHistory();

  const { user } = useAuthListener();

  useEffect(() => {
    if (Object.keys(form.errors).length === 0 && form.isSubmiting) {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(form.values.email, form.values.password)
        .then(() => {
          setLoading(false);
          history.push("/content");
        })
        .catch((err) => {
          setLoading(false);
          form.setFormToDefault();
          setFirebaseErrors(err.message);
        });
    }
  }, [form.errors]);

  const clickLogoHandler = () => {
    history.push("/");
  };

  if (user) return <Redirect to="/content" />;

  return (
    <Cont>
      <Header>
        <Logo cliked={clickLogoHandler} page="secondary" />
      </Header>
      <Form
        page="signup"
        values={form.values}
        errors={form.errors}
        fireBaseErrors={firebaseErrors}
        changed={form.inputChangeHandler}
        submit={form.formSubmitHandler}
        isLoading={loading}
      />
      <Footer />
    </Cont>
  );
};

export default Signup;
