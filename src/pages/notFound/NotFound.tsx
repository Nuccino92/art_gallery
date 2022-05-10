import { Container } from "react-bootstrap";

const NotFound: React.FC = () => {
  return (
    <Container
      style={{
        color: "black",
        fontSize: "100px",
        margin: "0 auto",
      }}
      className="NotFound"
    >
      404 Not found
    </Container>
  );
};

export default NotFound;
