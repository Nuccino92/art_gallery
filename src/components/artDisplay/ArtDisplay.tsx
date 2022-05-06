// model for each art object
import { Art } from "../../models/art";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ArtDisplay.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  artData: Array<Art>;
}

const ArtDisplay: React.FC<Props> = ({ artData }) => {
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const windowSize = useWindowSize();

  const [show, setShow] = useState(false);
  const [singleArtData, setSingleArtData] = useState<null | Art>(null);

  const handleClose = () => {
    setShow(false);
    setSingleArtData(null);
  };
  const handleShow = (art: Art) => {
    setShow(true);
    setSingleArtData(art);
  };

  useEffect(() => {
    windowSize.width < 1630 && setSmallScreen(true);
    windowSize.width > 1630 && setSmallScreen(false);
  }, [windowSize]);

  return (
    <>
      <Container className="ArtDisplay">
        <Row>
          {artData?.map((art, index) => {
            return (
              <Col
                key={index}
                className="mb-2 art-work"
                xs={12}
                sm={!smallScreen ? 6 : 11}
              >
                <img
                  src={art.picture}
                  alt="art"
                  onClick={() => handleShow(art)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        style={{ zIndex: "100000000000000000000000000" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Link to={`/art/${singleArtData?.author}`}>
              {singleArtData?.author}
            </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            //bootstrap class to fit image
            className="img-fluid"
            src={singleArtData?.picture}
            alt="Art"
          ></img>
        </Modal.Body>
        <Modal.Footer>
          <Container className="container-fluid d-flex flex-column align-items-center">
            <Row>
              <Col align="center">
                Views
                <Col>
                  {/*
                    // @ts-ignore */}
                  {new Intl.NumberFormat().format(singleArtData?.views)}
                </Col>
              </Col>
              <Col align="center">
                Downloads
                <Col>
                  {/*
                    // @ts-ignore */}
                  {new Intl.NumberFormat().format(singleArtData?.downloads)}
                </Col>
              </Col>
            </Row>
            <a href={singleArtData?.profile} target="_blank" rel="noreferrer">
              Visit {singleArtData?.author} Unsplash page
            </a>
            <Link to={`/art/${singleArtData?.author}`} onClick={handleClose}>
              View some other favorited works from {singleArtData?.author}
            </Link>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArtDisplay;
