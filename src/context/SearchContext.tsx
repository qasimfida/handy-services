import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  useContext,
} from "react";
import { categories } from "../constants";

interface SearchContextProps {
  results: any[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchData: (value?: string) => Promise<void>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [results, setResults] = useState<any[]>(categories);
  const [search, setSearch] = useState<string>("");

  const fetchData = async (value?: string): Promise<void> => {
    try {
      setResults(categories);
      // Add your async logic here
      // const res = await axios.get(proxyUrl);
      // if (res.ok) {
      //   setResults(res.data);
      // } else {
      //   handle error
      // }
    } catch (err) {
      console.error({ err });
    }
  };

  const contextValue: SearchContextProps = {
    results,
    search,
    setSearch,
    fetchData,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
