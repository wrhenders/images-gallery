import React from "react";
import { Navbar, Container } from "react-bootstrap";
// import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <b>Images Gallery</b>
        {/* <Logo style={{ maxWidth: "14rem", maxHeight: "2rem" }} /> */}
      </Container>
    </Navbar>
  );
};

export default Header;
