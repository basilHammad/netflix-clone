import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

import Main from "../../component/home/main/main";
import Footer from "../../component/ui/footer/Footer";
import Faq from "../../component/home/faq/Faq";
import Cards from "../../component/home/cards/Cards";
import faqListData from "../../fixtures/faqs.json";
import classes from "./home.module.css";
import formContext from "../../context/formContext/formContext";
import useAuthListener from "../../hooks/useAuthListener";

const Home = () => {
  const [faqData, setFaqData] = useState(faqListData);

  const history = useHistory();

  const form = useContext(formContext);

  const { user } = useAuthListener();

  useEffect(() => {
    if (!form.errors.email && form.isSubmiting) {
      form.cancelSubmiting();
      history.push("/signup");
    }
  }, [form.errors]);

  const clickItemHandler = (id, show) => {
    const updatedData = faqData.map((item) => {
      return id === item.id
        ? { ...item, showBody: !show }
        : { ...item, showBody: false };
    });
    setFaqData(updatedData);
  };

  const redirectToSignin = () => {
    history.push("./signin");
  };

  if (user) return <Redirect to="/content" />;

  return (
    <div className={classes.mainCont}>
      <Main
        errors={form.errors}
        values={form.values}
        submit={form.formSubmitHandler}
        changed={form.inputChangeHandler}
        input={form.input}
        isSubmiting={form.isSubmiting}
        redirectToSignin={redirectToSignin}
      />

      <Cards />

      <Faq
        faqData={faqData}
        clicked={clickItemHandler}
        errors={form.errors}
        submit={form.formSubmitHandler}
        values={form.values}
        changed={form.inputChangeHandler}
      />

      <Footer footerThem="primary" />
    </div>
  );
};

export default Home;
