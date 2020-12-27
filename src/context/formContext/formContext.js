import { createContext } from "react";

export default createContext({
  values: {
    userName: "",
    email: "",
    password: "",
    photoURL: "",
  },
  errors: {},
  input: null,
  isSubmiting: false,
  inputChangeHandler: () => {},
  formSubmitHandler: () => {},
  setFormToDefault: () => {},
});
