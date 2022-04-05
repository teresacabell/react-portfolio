import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Form from "react-bootstrap/Form";

const contactStyles = {
  padding: "20px",
  border: "2px solid green",
  display: "grid",
  justifyContent: "space-between"
};

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
    <section style={contactStyles} className="contact" id="contact" >
      <div>
        <h2>Reach Out</h2>
      </div>
      <Form id="contact-form" onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <br/>
              <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </Form.Group>
          <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <br/>
              <Form.Control type="text" name="email" defaultValue={email} onBlur={handleChange} />
          </Form.Group>
          <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <br/>
              <textarea name="message" rows="7" defaultValue={message} onBlur={handleChange} />
          </Form.Group>
          {errorMessage && (
                <div>
                    <Form.Text className="error-text" style={{ color: 'red' }}>{errorMessage}</Form.Text>
                </div>
            )}
            <button type="submit">Submit my message</button>
      </Form>
    </section>
  );
};

export default ContactMe;
