import React from "react";
import { Switch, Route } from "react-router-dom";

import FormState from "./context/formContext/FormState";
import Home from "./containers/home/Home";
import Signin from "./containers/signin/Signin";
import Signup from "./containers/signup/Signup";
import Content from "./containers/content/Content";
import useContent from "./hooks/useContent";
import selectionFilter from "./utils/selectionFilter";

const App = () => {
  const { films } = useContent("films");
  const { series } = useContent("series");
  const category = selectionFilter(series, films);

  return (
    <FormState>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/content">
          <Content category={category} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </FormState>
  );
};
export default App;
