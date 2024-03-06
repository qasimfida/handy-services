import React from "react";
import { SearchResult } from "../SearchResult";
import { filterCategoriesAndServices } from "../../helpers";
import "./styles.css";
import { useSearch } from "../../context/SearchContext";

export const SearchResultsList: React.FC = () => {
  const { results, search } = useSearch();
  const res = filterCategoriesAndServices(results, search);
  const totalHeight = res.length > 0 ? "h-[330px]" : "h-auto";
  if (!search) {
    return null;
  }
  return (
    <div
      className={`wrapper pr-[6px] border absolute top-[60px] max-w-[550px] w-[100%] rounded-[10px] bg-white border-primary`}
    >
      <div className={`search_lists ${totalHeight}`}>
        {res.length ? (
          res.map((result: any, id: number) => (
            <SearchResult result={result} key={id} />
          ))
        ) : (
          <p className="p-4">No Results found!</p>
        )}
      </div>
    </div>
  );
};
