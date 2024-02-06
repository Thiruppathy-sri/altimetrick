import React, { useState } from "react";
import { useSelector } from "react-redux";
import BrandSection from "../component/brand-section";
import CarListDetails from "../component/car-details";
import CarCard from "../component/UI/car-card";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = (state: boolean) => {
    setShowModal(state);
  };
  const listingFilters: any = useSelector(
    (state: any) => state.formData.listingFilters
  );
  return (
    <>
      {" "}
      <BrandSection onShowModal={showModalHandler} />
      <CarListDetails isModalOpen={showModal} onShowModal={showModalHandler} />
      <div className="flex flex-auto flex-wrap">
        {listingFilters.map((car: any, index: any) => {
          return (
            <>
              <CarCard key={index} car={car} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
