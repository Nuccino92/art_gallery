import {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { Art } from "../../models/art";
import { art as artQuery } from "../../firebase/art";

interface Props {
  children: ReactNode;
}

interface Context {
  allArt: Array<Art>;
  art: Array<Art>;
  setArt: Dispatch<SetStateAction<Art[]>>;
}

const ArtContext = createContext<Context | null>(null);

const ArtContextProvider = ({ children }: Props) => {
  // state to hold art data to be used in art display
  const [art, setArt] = useState<Array<Art>>([]);

  // state the hold all art data
  const [allArt, setAllArt] = useState<Array<Art>>([]);

  useEffect(() => {
    artQuery().then((res) => {
      setAllArt(res);
    });
  }, []);

  return (
    <ArtContext.Provider value={{ art, setArt, allArt }}>
      {children}
    </ArtContext.Provider>
  );
};

export { ArtContext, ArtContextProvider };
