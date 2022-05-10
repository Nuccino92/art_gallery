import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {
  Navbar,
  InputGroup,
  FormControl,
  Container,
  Nav,
} from "react-bootstrap";
import { useContext, useState, ChangeEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { ArtContext } from "../context/artContext";
import { Art } from "../../models/art";
import UnsplashLogo from "../../components/header/unsplash-logo.png";

const SideNavSmall = () => {
  const artContext = useContext(ArtContext);
  const searchRef = useRef<any>(null);

  const [opened, setOpened] = useState<boolean>(false);

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
    <>
      {opened ? (
        <>
          <Navbar className="SideNavSmall">
            <Link
              className="SideNav-header"
              to="/"
              onClick={() => setOpened(false)}
            >
              Photo Gallery
            </Link>

            <InputGroup>
              <FormControl
                ref={searchRef}
                aria-label="Search"
                onChange={handleFilter}
                onFocus={() => setSearchBarFocus(true)}
                onBlur={handleBlur}
                placeholder="Search Authors"
              />
            </InputGroup>
            {searchBarFocus && (
              <Container>
                <Container className="search-results-container">
                  {searchFilter?.length === 0 ? (
                    <div>No results found</div>
                  ) : (
                    searchFilter?.slice(0, 9).map((result, index) => {
                      return (
                        <Link
                          to={`/author/${result.author}`}
                          key={index}
                          onClick={() => setOpened(false)}
                        >
                          <div key={index}>{result.author}</div>
                        </Link>
                      );
                    })
                  )}
                </Container>
              </Container>
            )}
            <Link onClick={() => setOpened(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setOpened(false)} to="/info">
              Information
            </Link>
            <GrClose
              className="close-btn"
              size={55}
              onClick={() => setOpened(false)}
            />
            <Nav.Link
              style={{ position: "absolute", bottom: 0 }}
              href="https://unsplash.com"
              target="_blank"
              onClick={() => setOpened(false)}
            >
              <img src={UnsplashLogo} alt="Unsplash"></img>
            </Nav.Link>
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
