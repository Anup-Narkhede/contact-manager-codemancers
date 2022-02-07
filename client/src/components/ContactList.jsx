import React from "react";
import { Link } from "react-router-dom";
import { Button, Search } from "semantic-ui-react";
import { List } from "semantic-ui-react";
import { ContactCard } from ".";

const ContactList = ({
  contacts,
  removeContactHandler,
  term,
  searchKeyword,
}) => {
  const renderContact = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact._id}
        removeContactHandler={removeContactHandler}
      />
    );
  });

  const getSearchTerm = (e) => {
    searchKeyword(e.target.value);
  };
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <Button color="blue" size="medium" floated="right">
            Add Contact
          </Button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <List celled>{renderContact}</List>
    </div>
  );
};

export default ContactList;
