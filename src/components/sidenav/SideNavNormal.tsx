import { Navbar, Nav, InputGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNavNormal = () => {
  return (
    <Navbar
      className="SideNavNormal"
      // className="p-5 d-flex flex-column t start-0 top-0 h-100"
      style={{ color: "black", zIndex: "100000" }}
    >
      <Nav.Link className="SideNav-header">
        <Link to="/">Photo Gallery</Link>
      </Nav.Link>
      <InputGroup>
        <FormControl aria-label="Search" />
        <Button>Search</Button>
      </InputGroup>
      <Nav.Link>Description</Nav.Link>
    </Navbar>
  );
};

export default SideNavNormal;
