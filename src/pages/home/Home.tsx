import { useContext, useEffect } from "react";
import ArtDisplay from "../../components/artDisplay/ArtDisplay";
import { ArtContext } from "../../components/context/artContext";
import Header from "../../components/header/Header";
import { art as artQuery } from "../../firebase/art";
import "./Home.scss";

const Home: React.FC = () => {
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
    <div className="Home">
      <Header location={"home"} author={undefined} link={undefined} />
      <ArtDisplay />
    </div>
  );
};

export default Home;
