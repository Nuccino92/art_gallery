import { useEffect } from "react";
import "./App.scss";
import { art } from "./firebase/art";

function App() {
  useEffect(() => {
    art().then((res) => {
      console.log(res);
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
