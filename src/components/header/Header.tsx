import { useEffect, useRef } from "react";
import "./Header.scss";
import UnsplashLogo from "./unsplash-logo.png";
import { Nav, Navbar, Image } from "react-bootstrap";

const Header: React.FC = () => {
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
        backgroundColor: "rgba(255, 255, 255, 0.676)",
      }}
    >
      <Nav.Link href="https://unsplash.com/" target="_blank" className="h-100">
        <Image
          src={UnsplashLogo}
          fluid
          className="h-100 w-100 "
          style={{
            objectFit: "contain",
          }}
        />
      </Nav.Link>
    </Navbar>
  );
};

export default Header;
