import React from "react";
import { SearchResult } from "../SearchResult";
import { useSearch } from "../../context/SearchContext";
import { filterCategoriesAndServices } from "../../helpers";

export const SearchResultsList = () => {
  const { results, search } = useSearch();
  const res = filterCategoriesAndServices(results, search);
  const totalHeight = res.length > 0 ? "h-[330px]" : "h-auto";
  if (!search) {
    return null;
  }
  return (
    <div
      className={`absolute top-[54px] max-w-[550px] w-[100%] rounded-[10px] bg-white ${totalHeight} flex flex-col shadow-md rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200`}
    >
      {res.length
        ? res.map((result, id) => <SearchResult result={result} key={id} />)
        : ""}
      <p className="p-4">No Results found!</p>
    </div>
  );
};
