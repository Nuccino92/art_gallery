// model for each art object
import { Art } from "../../models/art";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ArtDisplay.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArtContext } from "../context/artContext";

const ArtDisplay: React.FC = () => {
  const artContext = useContext(ArtContext);

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
          {artContext?.art.map((each, index) => {
            return (
              <Col
                key={index}
                className="mb-2 art-work"
                xs={12}
                sm={!smallScreen ? 6 : 11}
              >
                <img
                  src={each.picture}
                  alt="art"
                  onClick={() => handleShow(each)}
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
            <Link to={`/author/${singleArtData?.author}`}>
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
            <Row style={{ marginBottom: "10px" }}>
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
              Visit authors Unsplash page
            </a>
            <Link to={`/author/${singleArtData?.author}`} onClick={handleClose}>
              View some of the other authors works
            </Link>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArtDisplay;
