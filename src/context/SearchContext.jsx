import axios from "axios";
import { createContext, useState } from "react";
import { useContext } from "react";

const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const proxyUrl =
    "https://cors-anywhere.herokuapp.com/corsdemo/https://s4.bg2.eu/services.json";

  const fetchData = async (value) => {
    const res = await axios.get(proxyUrl);
    console.log({ res });
    if (res.ok) {
      setResults(res);
    } else {
      console.log({ res });
    }
  };

  return (
    <SearchContext.Provider value={{ results, setResults, fetchData }}>
      {children}
    </SearchContext.Provider>
  );
};
