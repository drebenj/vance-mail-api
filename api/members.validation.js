const Validator = require("validator");
const isEmpty = require("is-empty");

exports.subscribe = (data) => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required!";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Input must be a valid email!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
