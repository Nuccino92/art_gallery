import { useEffect, useRef } from "react";
import "./Header.scss";
import UnsplashLogo from "./unsplash-logo.png";
import { Nav, Navbar, Image, Container } from "react-bootstrap";

interface Props {
  location: string;
  author: string | undefined;
  link: string | undefined;
}

const Header = ({ location, author, link }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = headerRef.current;
      nav?.classList.toggle("shrink", window.scrollY > 0);
    });
  }, []);

  return (
    <Navbar
      ref={headerRef}
      className="Header d-flex justify-content-center sticky-top"
      style={{
        height: "22vh",
        transition: "0.8s ease",
      }}
    >
      {location === "home" ? (
        <Nav.Link
          href="https://unsplash.com/"
          target="_blank"
          className="h-100"
        >
          <Image
            src={UnsplashLogo}
            fluid
            className="h-100 w-100 "
            style={{
              objectFit: "contain",
            }}
          />
        </Nav.Link>
      ) : (
        <Container>
          <Nav.Link
            href="https://unsplash.com/"
            target="_blank"
            className="h-100"
          >
            <h1>{author}</h1>
          </Nav.Link>

          <Nav.Link href={link} target="_blank" className="Header-visit-link">
            Visit Unsplash Profile
          </Nav.Link>
        </Container>
      )}
    </Navbar>
  );
};

export default Header;
