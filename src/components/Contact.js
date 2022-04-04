import React from "react";

const ContactMe = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const {name, email, message} = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const validate = validateEmail(e.target.value);
      console.log(validate);
      if (!validate) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return <section className="contact-form" id="contact"></section>;
};

export default ContactMe;
