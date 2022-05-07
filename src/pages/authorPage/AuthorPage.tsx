import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import ArtDisplay from "../../components/artDisplay/ArtDisplay";
import { art } from "../../firebase/art";
import "./AuthorPage.scss";
import { Art } from "../../models/art";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { ArtContext } from "../../components/context/artContext";

// component displaying all of the authors work
const AuthorPage: React.FC = () => {
  const artContext = useContext(ArtContext);

  const { id: author } = useParams();

  useEffect(() => {
    art().then((res) => {
      artContext?.setArt([]);
      // retrieve firebase data and shuffle to display different photos each time
      res.map((e: Art) => {
        if (e.author.toLowerCase() === author?.toLowerCase()) {
          return artContext?.setArt((prev) => [...prev, e]);
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [author]);

  return (
    <Container className="AuthorPage">
      <Header
        location={"author"}
        author={author}
        link={"https://unsplash.com/"}
      ></Header>

      <ArtDisplay />
    </Container>
  );
};

export default AuthorPage;
