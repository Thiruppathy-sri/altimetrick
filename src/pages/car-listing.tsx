import React, { useEffect, useState } from "react";
import CarCard, { CarListProps } from "../component/UI/car-card";
import { useSelector } from "react-redux";
import Sidebar from "../component/sidebar";

const CarListing = () => {
  const carDetails: any = useSelector(
    (state: any) => state.formData.carDetails
  );

  return (
    <>
      <Sidebar />
      <div className="relative flex flex-wrap w-3/4 left-1/4">
        {carDetails.map((car: CarListProps, index: number) => {
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

export default CarListing;
