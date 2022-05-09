import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  Navbar,
  InputGroup,
  Button,
  FormControl,
  Container,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArtContext } from "../context/artContext";
import { Art } from "../../models/art";
import UnsplashLogo from "../../components/header/unsplash-logo.png";

const SideNavNormal = () => {
  const artContext = useContext(ArtContext);

  // state for searchbar data
  const [searchFilter, setSearchFilter] = useState<Array<Art> | void>([]);

  const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);

  const handleBlur = () => {
    setTimeout(() => {
      setSearchBarFocus(false);
    }, 100);
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;

    const removeDuplicateAuthors = artContext?.allArt.filter(
      (v, i, a) => a.findIndex((v2) => v.author === v2.author) === i
    );

    const newFilter = removeDuplicateAuthors?.filter((art) => {
      return art.author.toLowerCase().includes(word.toLowerCase());
    });

    word === "" ? setSearchFilter([]) : setSearchFilter(newFilter);
  };

  return (
    <Navbar className="SideNavNormal" style={{ color: "black" }}>
      <Link className="SideNav-header" to="/">
        Photo Gallery
      </Link>
      <InputGroup>
        <FormControl
          aria-label="Search"
          onChange={handleFilter}
          onFocus={() => setSearchBarFocus(true)}
          onBlur={handleBlur}
          placeholder="Find Authors"
        />
      </InputGroup>
      {searchBarFocus && (
        <Container>
          <Container className="search-results-container">
            {searchFilter?.length === 0 ? (
              <div>No results found</div>
            ) : (
              searchFilter?.map((result, index) => {
                return (
                  <Link to={`/author/${result.author}`} key={index}>
                    <div key={index}>{result.author}</div>
                  </Link>
                );
              })
            )}
          </Container>
        </Container>
      )}
      <Link to="/">Home</Link>
      <Link to="/info">Description</Link>
      <Nav.Link
        style={{ position: "absolute", bottom: 0 }}
        href="https://unsplash.com"
        target="_blank"
      >
        <img src={UnsplashLogo} alt="Unsplash"></img>
      </Nav.Link>
    </Navbar>
  );
};

export default SideNavNormal;
