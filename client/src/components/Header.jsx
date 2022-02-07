import React from "react";
import { Menu, Container } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu className="fixed">
      <Container className="center">
        <h2>React Contact Manager</h2>
      </Container>
    </Menu>
  );
};

export default Header;
