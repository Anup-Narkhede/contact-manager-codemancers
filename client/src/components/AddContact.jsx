import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const AddContact = ({ AddContactHandler }) => {
  const history = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.email === "" || contact.phone === "") {
      alert("All Fields are required");
    }
    AddContactHandler(contact);
    setContact({ ...contact, [e.target.value]: e.target.value });
    history("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <Form onSubmit={handleChange}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            required
          />
        </div>
        <div className="field">
          <label>Phone No.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone No."
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            required
          />
        </div>
        <Button color="blue">Add</Button>
      </Form>
    </div>
  );
};

export default AddContact;
