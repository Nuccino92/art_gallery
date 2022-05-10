import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import SideNav from "./components/sidenav/SideNav";
import AuthorPage from "./pages/authorPage/AuthorPage";
import Info from "./pages/info/Info";
import { useContext, useEffect } from "react";
import { ArtContext } from "./components/context/artContext";
import { art as artQuery } from "./firebase/art";

const App: React.FC = () => {
  const artContext = useContext(ArtContext);

  useEffect(() => {
    artQuery().then((res) => {
      // keeps search bar functionality throughout the app
      artContext?.setAllArt(res);

      // shuffling the response to randomize the display of images
      const shuffle = [].concat(res);
      shuffle.sort(() => {
        return 0.5 - Math.random();
      });
      // setting the art state in context to the shuffled array
      artContext?.setArt(shuffle);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author/:id" element={<AuthorPage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
