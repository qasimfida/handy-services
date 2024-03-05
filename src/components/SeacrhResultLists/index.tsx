import React from "react";
import { SearchResult } from "../SearchResult";
import { filterCategoriesAndServices } from "../../helpers";
import "./styles.css";
import { useSearch } from "../../context/SearchContext";

export const SearchResultsList: React.FC = () => {
  const { results, search } = useSearch();
  const res = filterCategoriesAndServices(results, search);
  console.log(res,"result")
  const totalHeight = res.length > 0 ? "h-[330px]" : "h-auto";
  if (!search) {
    return null;
  }
  return (
    <div
      className={`search_lists border  border-primary absolute top-[54px] max-w-[550px] w-[100%] rounded-[10px] bg-white ${totalHeight} flex flex-col shadow-md rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200`}
    >
      {res.length
        ? res.map((result: any, id: number) => (
            <SearchResult result={result} key={id} />
          ))
        : ""}
      <p className="p-4">No Results found!</p>
    </div>
  );
};
