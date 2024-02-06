import React from "react";
type BrandSectionProps = {
  onShowModal: (state: boolean) => void;
};
const BrandSection: React.FC<BrandSectionProps> = (props) => {
  const { onShowModal } = props;
  return (
    <div className="bg-gray-100 p-8 mx-12 my-10">
      <div className="container mx-auto grid grid-cols-5 gap-8">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="flex items-center justify-center">
            <div
              onClick={() => onShowModal(true)}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Brand
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
