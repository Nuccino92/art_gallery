// model for each art object
import { Art } from "../../models/art";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ArtDisplay.scss";

interface Props {
  artData: Array<Art>;
}

const ArtDisplay: React.FC<Props> = ({ artData }) => {
  return (
    <div className="ArtDisplay">
      <Container>
        <Row>
          {artData?.map((art, index) => {
            return (
              <Col
                key={index}
                style={{ cursor: "pointer" }}
                className="mb-2 art-work"
                xs="12"
                sm="6"
              >
                <img src={art.picture} alt="art" />{" "}
              </Col>
            );
          })}{" "}
        </Row>
      </Container>
    </div>
  );
};

export default ArtDisplay;
