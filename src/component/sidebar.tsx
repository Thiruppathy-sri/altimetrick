import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "./../store/form-data";
import Checkbox from "./UI/checkbox";

const Sidebar = () => {
  const listingFilters: any = useSelector(
    (state: any) => state.formData.listingFilters
  );
  const dispatch = useDispatch();

  const handleSelectChange = (event: any) => {
    const filteredItems = listingFilters.filter(
      (car: any) => car.model === event.target.value
    );
    dispatch(formDataActions.filterHandler(filteredItems));
  };
  const handleCheckboxChange = (event: any, field: string) => {
    const filteredItems = listingFilters.filter(
      (car: any) => car[field] === event
    );
    dispatch(formDataActions.filterHandler(filteredItems));
  };
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 my-16 z-40 w-1/4 h-full  transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="text-left h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {/* Select Model */}
        <div className="text-left mb-2.5">
          <label htmlFor="dropdown">Select an Model:</label>
        </div>
        <select
          className="text-left mb-2.5"
          id="dropdown"
          name="dropdown"
          value={"selectedValue"}
          onChange={handleSelectChange}
        >
          <option value="Select an Model">Select an Model</option>
          {listingFilters.map((car: any) => (
            <option key={car.model} value={car.model}>
              {car.model}
            </option>
          ))}
        </select>
        {/* Select Location */}
        <Checkbox
          title={"Select Location:"}
          listingFilters={listingFilters}
          field={"location"}
          onHandleCheckboxChange={handleCheckboxChange}
        />
        {/* Choose Color */}
        <Checkbox
          title={"Choose Color:"}
          listingFilters={listingFilters}
          field={"color"}
          onHandleCheckboxChange={handleCheckboxChange}
        />
        {/* No of Owners*/}
        <Checkbox
          title={"Owners:"}
          listingFilters={listingFilters}
          field={"noOfOwners"}
          onHandleCheckboxChange={handleCheckboxChange}
        />
        {/* year of manufacture */}
        <Checkbox
          title={"year of manufacture"}
          listingFilters={listingFilters}
          field={"yearofManufacture"}
          onHandleCheckboxChange={handleCheckboxChange}
        />
        {/* Transmission */}
        <Checkbox
          title={"transmission"}
          listingFilters={listingFilters}
          field={"transmission"}
          onHandleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
