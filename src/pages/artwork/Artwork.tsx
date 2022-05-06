import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import ArtDisplay from "../../components/artDisplay/ArtDisplay";
import { art } from "../../firebase/art";
import "./Artwork.scss";
import { Art } from "../../models/art";

// component displaying all of the authors work
const Artwork: React.FC = () => {
  const [artData, setArtData] = useState<Array<Art>>([]);

  useEffect(() => {
    art().then((res) => {
      // retrieve firebase data and shuffle to display different photos each time
      const shuffle = [].concat(res);
      shuffle.sort(() => {
        return 0.5 - Math.random();
      });
      setArtData(shuffle);
    });
  }, []);
  return (
    <Container className="ArtWork">
      {" "}
      <ArtDisplay artData={artData} />
    </Container>
  );
};

export default Artwork;
