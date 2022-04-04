import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const ContactMe = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

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

  return (
    <section className="contact" id="contact">
      <div>
        <h2>Reach out</h2>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="7" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
                <div>
                    <p className="error-text" style={{ color: 'red' }}>{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit my message</button>
      </form>
    </section>
  );
};

export default ContactMe;
