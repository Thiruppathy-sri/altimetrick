import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./form-data";

const store = configureStore({
  reducer: { formData: formDataSlice },
});

export default store;
