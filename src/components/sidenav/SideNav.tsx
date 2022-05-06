import "./SideNav.scss";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import SideNavNormal from "./SideNavNormal";
import SideNavSmall from "./SideNavSmall";

const SideNav: React.FC = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width < 1350 && setMinimized(true);
    windowSize.width > 1350 && setMinimized(false);
  }, [windowSize]);

  return !minimized ? <SideNavNormal /> : <SideNavSmall />;
};

export default SideNav;
