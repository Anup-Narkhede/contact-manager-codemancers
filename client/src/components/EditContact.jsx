import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";

const EditContact = ({ retrieveContact, UpdateContactHandler }) => {
  const history = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const getContact = async () => {
      const contact = await retrieveContact(id);

      if (contact) {
        setContact(contact);
      }
    };
    getContact();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name === "" || contact.email === "" || contact.phone === "") {
      alert("All Fields are required");
    }
    UpdateContactHandler(contact);
    history("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <Form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone No."
            value={contact.phone}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <Button color="blue">Update</Button>
        <Link to="/">
          <Button color="red" content="Cancel" floated="right" />
        </Link>
      </Form>
    </div>
  );
};

export default EditContact;
