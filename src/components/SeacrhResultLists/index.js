import { SearchResult } from "../SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="absolute top-[54px] max-w-[550px] w-[100%] rounded-[10px] bg-white flex flex-col shadow-md rounded-lg mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
