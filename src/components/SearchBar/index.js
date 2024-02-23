import React, { useState } from "react";
import { SearchIcon } from "../Svgs";

export const SearchBar = ({ setResults, ...rest }) => {
  const [input, setInput] = useState("");
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const fetchData = (value) => {
    fetch(proxyUrl + "https://s4.bg2.eu/services.json", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        const results = json.categories.filter((user) => {
          return (
            value &&
            user &&
            user.category &&
            user.category.toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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
