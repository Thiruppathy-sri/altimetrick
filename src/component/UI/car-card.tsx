import React from "react";
export interface CarListProps {
  model: string;
  location: string;
  color: string;
  noOfOwners: number;
  yearofManufacture: number;
  transmission: string;
  insuranceUpto: string;
  externalFitments: string[];
  kms: number;
  photo: string;
}
export interface CarList {
  CarListProps: [];
}
const CarCard: React.FC<{ car: CarListProps }> = ({ car }) => {
  return (
    <div className="mx-auto bg-white rounded-xl overflow-hidden shadow-md my-6">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="bg-gray-100 h-full w-40"></div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {car.model}
          </div>
          <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
            {car.location}
          </p>
          <ul className="mt-4">
            <li>
              <strong>color:</strong> {car.color}
            </li>
            <li>
              <strong>noOfOwners:</strong> {car.noOfOwners}
            </li>
            <li>
              <strong>yearofManufacture:</strong> ${car.yearofManufacture}
            </li>
            <li>
              <strong>transmission:</strong> {car.transmission}
            </li>
            <li>
              <strong>insuranceUpto:</strong> ${car.insuranceUpto}
            </li>
            <li>
              <strong>externalFitments:</strong> {car.externalFitments}
            </li>
            <li>
              <strong>kms:</strong> ${car.kms}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
