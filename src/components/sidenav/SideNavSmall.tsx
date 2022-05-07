import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {
  Navbar,
  InputGroup,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import { useContext, useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { ArtContext } from "../context/artContext";
import { Art } from "../../models/art";

const SideNavSmall = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const artContext = useContext(ArtContext);

  const [searchFilter, setSearchFilter] = useState<Array<Art> | void>([]);

  // artContext?.allArt

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;

    const removeDuplicateAuthors = artContext?.allArt.filter(
      (v, i, a) => a.findIndex((v2) => v.author === v2.author) === i
    );

    const newFilter = removeDuplicateAuthors?.filter((art) => {
      return art.author.toLowerCase().includes(word.toLowerCase());
    });

    word === ""
      ? setSearchFilter(artContext?.allArt)
      : setSearchFilter(newFilter);
  };

  useEffect(() => {
    console.log(searchFilter);
  }, [searchFilter]);

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
              <FormControl aria-label="Search" onChange={handleFilter} />
              <Button>Search</Button>
            </InputGroup>
            <Link to="/info">Description</Link>
          </Navbar>
        </>
      ) : (
        <Container className="hamburger-container">
          <GiHamburgerMenu
            size={47}
            onClick={() => setOpened(true)}
            style={{ overflow: "visible" }}
          />
        </Container>
      )}
    </>
  );
};

export default SideNavSmall;
