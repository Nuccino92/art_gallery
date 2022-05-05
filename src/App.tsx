import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Artwork from "./pages/artwork/Artwork";
import NotFound from "./pages/notFound/NotFound";
import SideNav from "./components/sidenav/SideNav";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:id" element={<Artwork />} />
          <Route path="/author/:id" />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
