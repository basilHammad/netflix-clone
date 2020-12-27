import React from "react";

import formContext from "./formContext";
import useForm from "../../hooks/useForm";

const FormState = ({ children }) => {
  const {
    values,
    errors,
    input,
    isSubmiting,
    inputChangeHandler,
    formSubmitHandler,
    cancelSubmiting,
    setFormToDefault,
  } = useForm();

  return (
    <formContext.Provider
      value={{
        values: values,
        errors: errors,
        isSubmiting: isSubmiting,
        input: input,
        inputChangeHandler: inputChangeHandler,
        formSubmitHandler: formSubmitHandler,
        cancelSubmiting: cancelSubmiting,
        setFormToDefault: setFormToDefault,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export default FormState;
