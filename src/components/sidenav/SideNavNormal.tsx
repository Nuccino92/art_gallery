import { Navbar, InputGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNavNormal = () => {
  return (
    <Navbar
      className="SideNavNormal"
      style={{ color: "black", zIndex: "100000" }}
    >
      <Link className="SideNav-header" to="/">
        Photo Gallery
      </Link>

      <InputGroup>
        <FormControl aria-label="Search" />
        <Button>Search</Button>
      </InputGroup>
      <Link to="/info">Description</Link>
    </Navbar>
  );
};

export default SideNavNormal;
