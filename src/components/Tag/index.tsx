import React from "react";
import "./styles.css";
import { stringToSlug } from "../../helpers";
import { TagsProps } from "../../types";

const Tag: React.FC<TagsProps> = ({ icon: Icon, tagName, ...rest }) => {
  return (
    <a
      className="tags_wrapper transition duration-400 ease-in-out w-full flex whitespace-nowrap items-center cursor-pointer space-x-2 bg-white px-3 py-2 rounded-md gap-2.5 hover:bg-[#E9F6FE] hover:shadow-lg focus:bg-[#E9F6FE] focus:shadow-lg active:bg-[#2E67CB] active:text-white active:shadow-inset-active"
      {...rest}
      href={`/services/${stringToSlug(`/${tagName}`)}`}
    >
      <div className="bg-[#E6F5F3] p-1.5 rounded-full">
        <Icon />
      </div>
      <span className="text-[#232e41] font-medium "> {tagName}</span>
    </a>
  );
};

export default Tag;
