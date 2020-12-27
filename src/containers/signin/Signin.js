import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

import Form from "../../component/ui/form/Form";
import Footer from "../../component/ui/footer/Footer";
import Logo from "../../component/ui/logo/Logo";
import formContext from "../../context/formContext/formContext";
import firebaseContext from "../../context/firebaseContext/firebaseContext";
import useAuthListener from "../../hooks/useAuthListener";
import { Cont, Header } from "./style";

const Signin = () => {
  const [fireBaseErrors, setFirebaseErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { user } = useAuthListener();

  const form = useContext(formContext);
  const firebase = useContext(firebaseContext);

  useEffect(() => {
    if (!form.errors.email && !form.errors.password && form.isSubmiting) {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(form.values.email, form.values.password)
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

  const clickLogoHnadler = () => {
    history.push("/");
  };

  if (user) return <Redirect to="/content" />;

  return (
    <Cont>
      <Header>
        <Logo cliked={clickLogoHnadler} page="secondary" />
      </Header>
      <Form
        page="signin"
        values={form.values}
        errors={form.errors}
        fireBaseErrors={fireBaseErrors}
        changed={form.inputChangeHandler}
        submit={form.formSubmitHandler}
        isLoading={loading}
      />
      <Footer footerThem="secondary" />
    </Cont>
  );
};

export default Signin;
