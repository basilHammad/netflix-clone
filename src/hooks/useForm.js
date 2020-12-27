import { useRef, useState } from "react";

import validate from "../utils/validation";

function useForm() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    photoURL: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  const input = useRef();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmiting(true);
    setValues({ ...values, photoURL: Math.floor(Math.random() * 5) + 1 });
    if (input.current) {
      input.current.focus();
    }
  };

  const cancelSubmiting = () => {
    setIsSubmiting(false);
    setErrors({});
  };

  const setFormToDefault = () => {
    setValues({
      userName: "",
      email: "",
      password: "",
    });
  };

  return {
    values,
    errors,
    input,
    isSubmiting,
    inputChangeHandler,
    formSubmitHandler,
    cancelSubmiting,
    setFormToDefault,
  };
}

export default useForm;
