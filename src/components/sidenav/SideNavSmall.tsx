import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {
  Navbar,
  InputGroup,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideNavSmall = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      {opened ? (
        <>
          <Navbar className="SideNavSmall">
            <GrClose size={55} onClick={() => setOpened(false)} />
            <Link className="SideNav-header" to="/">
              Photo Gallery
            </Link>

            <InputGroup>
              <FormControl aria-label="Search" />
              <Button>Search</Button>
            </InputGroup>
            <Link to="/info">Description</Link>
          </Navbar>
        </>
      ) : (
        <Container className="hamburger-container">
          <GiHamburgerMenu
            size={55}
            onClick={() => setOpened(true)}
            style={{ overflow: "visible" }}
          />
        </Container>
      )}
    </>
  );
};

export default SideNavSmall;
