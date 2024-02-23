export const SearchResult = ({ result, id }) => {
  return (
    <div key={id} className="p-4">
      <h4 className=" font-bold text-left text-[#656d7a] px-2 ">
        {result.category}
      </h4>
      <div className="mt-4">
        {result.services.map((service, index) => (
          <div
            key={`${id}-${index}`}
            className="py-2 px-2 hover:bg-tertiary cursor-pointer rounded-[10px]"
            onClick={(e) => alert(`You selected ${service}!`)}
          >
            <p className="text-left text-[#232e41] font-[500] font-[circular] text-sm">
              {service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
