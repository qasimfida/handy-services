import React from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { slugToString } from "../../helpers";

const Service = () => {
  let { service } = useParams();

  return (
    <div>
      <Header />
      <div className="p-4 text-primary font-bold	capitalize text-3xl mt-5">{slugToString(service)}</div>
    </div>
  );
};

export default Service;
