import React from "react";
import Header from "../../components/Header";
import {
  CleaningIcon,
  ClockIcon,
  GarderningIcon,
  HandymanIcon,
  MobileStorageIcon,
  MoneyCreditsIcon,
  MoneyIcon,
  SearchIcon,
  StorageIcon,
} from "../../components/Svgs";
import Tags from "../../components/Tags";
import ServiceCard from "../../components/ServiceCard";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-tertiary pt-[66px] pb-10 px-4">
        <div className="flex justify-center items-center uppercase">
          <h1 className="text-5xl font-Koulen font-normal w-729 font-koulen ">
            Book a relevant service for{" "}
            <span className="text-5xl text-primary">your home</span>
          </h1>
        </div>
        <p className="text-secondary mt-5 text-2xl lowercase font-[circular]">
          In less than 30 seconds
        </p>
        <div className="filters mt-10  flex justify-center items-center ">
          <div className="border w-550 h-50 relative ">
            <SearchIcon class="absolute bottom-3.5 left-5 z-10" />
            <input
              className="font-[circular] w-full relative pl-14 pr-4 py-3.5 border border border-primary rounded-md font-medium text-[#232E41] focus:outline-none focus:border-primary "
              type="search"
              placeholder="What do you need help with?"
            />
          </div>
        </div>
        <h1 className="text-[#5e6a76] mt-5 text-2xl uppercase font-medium font-koulen">
          Popular Services
        </h1>
        <div className="flex flex-col justify-center items-center mt-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2.5  w-full sm:w-auto">
            <Tags icon={CleaningIcon} tagName="Domestic cleaning" />
            <Tags icon={GarderningIcon} tagName="Gardening" />
            <Tags icon={MobileStorageIcon} tagName="Mobile storage" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 flex justify-center items-center gap-2.5 mt-2.5 w-full sm:w-auto">
            <Tags icon={StorageIcon} tagName="Storage" />
            <Tags icon={HandymanIcon} tagName="Handyman" />
          </div>
        </div>
      </div>
      <div className="join_us m-16">
        <h1 className="text-[28px] uppercase font-koulen">
          get £300 in credits to use for 10 different services!
        </h1>
        <p className="text-[#232E41] font-[circular]">
          Join 30,000+ Fantastic Club members and access premium benefits for
          only £89/year.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div>
          <ServiceCard
            icon={<ClockIcon />}
            description="Select a service and your desired timeslot"
          />
        </div>
        <div>
          <ServiceCard
            icon={<MoneyIcon />}
            description="Pick the “Handy services” price (adds
                £89 to your total)"
          />
        </div>
        <div>
          <ServiceCard
            icon={<MoneyCreditsIcon />}
            description="Enjoy £300 in credits and member-
            only rates"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
