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
  StorageIcon,
} from "../../components/Svgs";
import Tag from "../../components/Tag";
import ServiceCard from "../../components/ServiceCard";
import { SearchBar } from "../../components/SearchBar";
import { SearchResultsList } from "../../components/SeacrhResultLists";
import PageProgressBar from "../../components/PageProgressBar";

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full bg-white h-20">
        <Header />
      </div>
      <div>
        <PageProgressBar />
      </div>
      <div className="bg-tertiary pt-[66px] pb-10 px-4 mt-[80px]">
        <div className="flex items-center justify-center uppercase">
          <h1 className="sm:text-5xl text-[28px] font-normal font-Koulen w-729 font-koulen ">
            Book a relevant service for{" "}
            <span className="sm:text-5xl text-[28px]  text-primary">
              your home
            </span>
          </h1>
        </div>
        <p className=" sm:mt-5 mt-2 sm:text-2xl text-[18px] lowercase text-secondary ">
          In less than 30 seconds
        </p>
        <div className="relative flex flex-col items-center justify-center mt-10 filters ">
          <SearchBar />
          <SearchResultsList />
        </div>
        <h1 className="text-[#5e6a76] mt-5 text-2xl uppercase font-medium font-koulen">
          Popular Services
        </h1>
        <div className="flex flex-col items-center justify-center mt-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2.5  w-full sm:w-auto">
            <Tag icon={CleaningIcon} tagName="Domestic cleaning" />
            <Tag icon={GarderningIcon} tagName="Gardening" />
            <Tag icon={MobileStorageIcon} tagName="Mobile storage" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 flex justify-center items-center gap-2.5 mt-2.5 w-full sm:w-auto">
            <Tag icon={StorageIcon} tagName="Storage" />
            <Tag icon={HandymanIcon} tagName="Handyman" />
          </div>
        </div>
      </div>
      <div className="my-16 px-3">
        <h1 className="text-[28px] uppercase font-koulen">
          get £300 in credits to use for 10 different services!
        </h1>
        <p className="text-[#232E41]">
          Join 30,000+ Fantastic Club members and access premium benefits for
          only £89/year.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
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
