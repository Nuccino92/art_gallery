import { useEffect, useRef } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = headerRef.current;
      nav?.classList.toggle("shrink", window.scrollY > 0);
    });
  }, []);
  return (
    <div ref={headerRef} className="Header">
      heady
    </div>
  );
};

export default Header;
