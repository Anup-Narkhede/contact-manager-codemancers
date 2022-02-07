import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Image, Item } from "semantic-ui-react";
import user from "../images/download.png";
import DeleteContact from "./DeleteContact";

const ContactCard = ({ contact, removeContactHandler }) => {
  const [open, setOpen] = useState(false);

  const { _id, name, email, phone } = contact;
  return (
    <>
      <DeleteContact
        open={open}
        setOpen={setOpen}
        id={_id}
        removeContactHandler={removeContactHandler}
      />
      <Item className="center item">
        <Image src={user} alt="user" size="mini" avatar />
        <Item.Content verticalAlign="top">
          <Link to={`/contact/${_id}`}>
            <Item.Header>{name}</Item.Header>
            <Item.Description>{email}</Item.Description>
            <Item.Description>{phone}</Item.Description>
          </Link>
        </Item.Content>
        <Icon
          name="trash alternate outline"
          color="red"
          size="big"
          className="icon"
          onClick={() => setOpen(true)}
        />
        <Link to={`/edit/${_id}`}>
          <Icon name="edit" color="green" size="big" />
        </Link>
      </Item>
    </>
  );
};

export default ContactCard;
