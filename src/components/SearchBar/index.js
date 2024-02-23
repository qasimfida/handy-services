import { useState } from "react";
import { SearchIcon } from "../Svgs";
import { useSearch } from "../../context/SearchContext";

export const SearchBar = ({ ...rest }) => {
  const { fetchData } = useSearch();
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="max-w-[550px] w-[100%] h-50 relative " {...rest}>
      <SearchIcon class="absolute bottom-3.5 left-5 z-10" />
      <input
        className="font-[circular] w-full relative pl-14 pr-4 py-3.5 border border-primary rounded-[10px] font-medium text-[#232E41] focus:outline-none focus:border-primary "
        type="search"
        placeholder="What do you need help with?"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
