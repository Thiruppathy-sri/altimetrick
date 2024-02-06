import React from "react";
import CheckboxInput from "./checkbox-input";
type checkboxProps = {
  title: string;
  listingFilters: [];
  field: string;
  onHandleCheckboxChange: (value: string, field: string) => void;
};
const Checkbox = (props: checkboxProps) => {
  const { title, listingFilters, field, onHandleCheckboxChange } = props;
  return (
    <div className="text-left mt-3.5">
      <label className="text-left" htmlFor="link-checkbox">
        {title}
      </label>
      <div className="mt-3.5">
        {listingFilters.map((car: any, index: number) => {
          return (
            <>
              <div key={index} className="flex items-center">
                <CheckboxInput
                  value={car[field]}
                  field={field}
                  onHandleChange={onHandleCheckboxChange}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Checkbox;
