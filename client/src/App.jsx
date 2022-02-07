import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddContact,
  ContactDetail,
  ContactList,
  EditContact,
  Header,
} from "./components";
import "./App.css";
import api from "./api/contact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/");
    return response.data;
  };
  const retrieveContact = async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
  };

  const AddContactHandler = async (contact) => {
    const response = await api.post("/", contact);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    api.delete(`/${id}`);
    const newContactList = await contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const UpdateContactHandler = async (contact) => {
    const response = await api.put(`/${contact._id}`, contact);
    console.log(response.data);
    const { _id, name, email, phone } = response.data;
    setContacts(
      (contacts.map = (contact) => {
        return contact._id === _id ? { ...response.data } : contact;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== " ") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();

      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, [contacts]);

  return (
    <Container>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                removeContactHandler={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact AddContactHandler={AddContactHandler} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditContact
                retrieveContact={retrieveContact}
                UpdateContactHandler={UpdateContactHandler}
              />
            }
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail retrieveContact={retrieveContact} />}
          />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
