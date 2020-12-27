const validation = (values) => {
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  let errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!pattern.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "password need to be 6 charecaters or more";
  }

  if (!values.userName) {
    errors.userName = "Name  Required";
  }

  return errors;
};

export default validation;
