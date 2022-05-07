import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import SideNav from "./components/sidenav/SideNav";
import AuthorPage from "./pages/authorPage/AuthorPage";
import Info from "./pages/info/Info";

const App: React.FC = () => {
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
