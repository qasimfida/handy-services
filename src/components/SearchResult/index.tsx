import React from "react";
import { Link } from "react-router-dom";
import { stringToSlug } from "../../helpers";
import { SearchResultProps } from "../../types";



export const SearchResult: React.FC<SearchResultProps> = ({ result, id }) => {
  return (
    <div key={id} className="p-4 over-scrollbar">
      <h4 className=" font-bold text-left text-[#656d7a] px-2 ">
        {result.category}
      </h4>
      <div className="mt-4">
        {result.services.map((service:string, index:number) => (
          <Link
            key={`${id}-${index}`}
            to={`/services/${stringToSlug(`/${service}`)}`}
          >
            <div className="py-2 px-2 hover:bg-tertiary cursor-pointer rounded-[10px]">
              <p className="text-left text-[#232e41] font-[500] text-sm">
                {service}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
