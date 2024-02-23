import React from "react";

const ServiceCard = ({ icon, description }) => {
  return (
    <div className="bg-white border border-[#e9eaec] rounded-md py-4 px-6 h-full">
      <div className="w-[60px] h-[60px] shadow-md rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p className="mt-4 text-left text-[#656d7a] font-[circular]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
