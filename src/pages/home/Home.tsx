import { useEffect, useState } from "react";
import { art } from "../../firebase/art";
import ArtDisplay from "../../components/artDisplay/ArtDisplay";
import { Art } from "../../models/art";
import Header from "../../components/header/Header";

const Home: React.FC = () => {
  const [artData, setArtData] = useState<Array<Art>>([]);

  useEffect(() => {
    art().then((res) => {
      // retrieve firebase data and shuffle to display different photos each time
      const shuffle = [].concat(res);
      shuffle.sort(() => {
        return 0.5 - Math.random();
      });
      setArtData(shuffle);
    });
  }, []);

  return (
    <div className="Home">
      <Header />
      <ArtDisplay artData={artData} />
    </div>
  );
};

export default Home;
