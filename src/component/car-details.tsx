import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "./../store/form-data";
import React from "react";
import CarCard from "./UI/car-card";

type Inputs = {
  model: string;
  location: string;
  color: string;
  noOfOwners: string;
  yearofManufacture: string;
  transmission: string;
  insuranceUpto: string;
  externalFitments: string;
  kms: string;
  photo?: string;
};

type CarListDetailsProps = {
  isModalOpen: boolean;
  onShowModal: (state: boolean) => void;
};
const CarListDetails: React.FC<CarListDetailsProps> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { isModalOpen, onShowModal } = props;
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    dispatch(formDataActions.formSubmit(data));
  };
  return (
    <>
      {" "}
      {isModalOpen ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              onClick={() => onShowModal(false)}
            >
              X
            </button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center mt-8 flex-col max-w-md mx-auto my-0"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="model"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    model
                  </label>
                  <Controller
                    name="model"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="model"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    location
                  </label>
                  <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="location"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="color"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    color
                  </label>
                  <Controller
                    name="color"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="color"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="noOfOwners"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    no of owners
                  </label>
                  <Controller
                    name="noOfOwners"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="noOfOwners"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="yearofManufacture"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    year of manufacture
                  </label>
                  <Controller
                    name="yearofManufacture"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="yearofManufacture"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="transmission"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    transmission
                  </label>
                  <Controller
                    name="transmission"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="transmission"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="insuranceUpto"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    insurance up to
                  </label>
                  <Controller
                    name="insuranceUpto"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="insuranceUpto"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="externalFitments"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    external fitments
                  </label>
                  <Controller
                    name="externalFitments"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="externalFitments"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="kms"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    kms
                  </label>
                  <Controller
                    name="kms"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="kms"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="text-left block text-sm font-medium text-gray-700"
                  >
                    photo
                  </label>
                  <Controller
                    name="photo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="photo"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    )}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CarListDetails;
