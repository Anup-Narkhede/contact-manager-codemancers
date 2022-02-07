import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import user from "../images/user.jpg";

const ContactDetail = ({ retrieveContact }) => {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getContact = async () => {
      const contact = await retrieveContact(id);

      if (contact) {
        setContact(contact);
      }
    };
    getContact();
  }, [contact]);
  return (
    <div className="main">
      <Card centered>
        <Image src={user} />
        <Card.Content textAlign="center">
          <Card.Header>{contact?.name}</Card.Header>
          <Card.Description>{contact?.email}</Card.Description>
        </Card.Content>
      </Card>
      <div className="center-div">
        <Link to="/">
          <Button color="blue" className="center">
            Back to Contact List
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
