import { createContext, useState } from "react";
import { useContext } from "react";
import { categories } from "../constants";

const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState(categories);
  const [search, setSearch] = useState("");
  // const proxyUrl = "http://165.227.152.4/services.json";

  const fetchData = async (value) => {
    try {
      setResults(categories);
      // const res = await axios.get(proxyUrl);
      // if (res.ok) {
      //   setResults(res);
      // } else {
      // }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <SearchContext.Provider value={{ results, search, setSearch, fetchData }}>
      {children}
    </SearchContext.Provider>
  );
};