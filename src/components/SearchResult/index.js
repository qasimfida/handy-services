import React from "react";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="px-10 py-2 hover:bg-tertiary cursor-pointer"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      <h4 className="text-left">{result}</h4>
    </div>
  );
};
