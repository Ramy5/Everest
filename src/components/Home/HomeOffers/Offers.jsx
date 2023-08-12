import FakeOffersData from "@/components/Data/OffersData";
import React from "react";
import Offer from "./Offer";

const Offers = () => {
  return (
    <div className="flex justify-between gap-2 max-w-3xl md:max-w-7xl mx-auto">
      {FakeOffersData.map((offer) => {
        return <Offer key={Date.now()} {...offer} />;
      })}
    </div>
  );
};

export default Offers;
