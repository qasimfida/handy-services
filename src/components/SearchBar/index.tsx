import React from "react";
import { SearchIcon } from "../Svgs";
import "./styles.css";
import { useSearch } from "../../context/SearchContext";

export const SearchBar: React.FC = ({ ...rest }) => {
  const { setSearch, search } = useSearch();
  


  const handleChange = (value: string) => {
    setSearch(value);
  };
  
  return (
    <div
      className="custom_styles max-w-[550px] w-[100%] h-50 relative "
      {...rest}
    >
      <SearchIcon className="absolute bottom-3.5 left-5 z-10" />
      <input
        className="w-full relative pl-14 pr-4 py-3.5 border border-primary rounded-[10px] font-medium text-[#232E41] focus:outline-none focus:border-primary "
        type="search"
        placeholder="What do you need help with?"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
