import React from "react";
import { SearchResult } from "../SearchResult";
export const SearchResultsList = ({ results }) => {
  const totalHeight = results.length > 0 ? "h-[330px]" : "h-0";
  return (
    <div
      className={`absolute top-[54px] max-w-[550px] w-[100%] rounded-[10px] bg-white ${totalHeight} flex flex-col shadow-md rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200`}
    >
      {results.map((result, id) => (
        <SearchResult result={result} key={id} />
      ))}
    </div>
  );
};
