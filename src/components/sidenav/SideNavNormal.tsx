import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Navbar, InputGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArtContext } from "../context/artContext";
import { Art } from "../../models/art";

const SideNavNormal = () => {
  const artContext = useContext(ArtContext);

  // state for searchbar data
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
    <Navbar className="SideNavNormal" style={{ color: "black" }}>
      <Link className="SideNav-header" to="/">
        Photo Gallery
      </Link>
      <InputGroup>
        <FormControl aria-label="Search" onChange={handleFilter} />
        <Button>Search</Button>
      </InputGroup>
      <Link className="SideNav-header" to="/">
        Home
      </Link>
      <Link to="/info">Description</Link>
    </Navbar>
  );
};

export default SideNavNormal;
