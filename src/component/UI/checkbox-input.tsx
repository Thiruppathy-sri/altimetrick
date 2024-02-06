import React from "react";

type checkboxInputProps = {
  value: string;
  field: string;
  onHandleChange: (value: string, field: string) => void;
};
const CheckboxInput = (props: checkboxInputProps) => {
  const { value, field, onHandleChange } = props;
  return (
    <div>
      <input
        id="link-checkbox"
        type="checkbox"
        value={value}
        onChange={() => onHandleChange(value, field)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {value}
      </label>
    </div>
  );
};

export default CheckboxInput;
