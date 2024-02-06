import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  carDetails: [],
  listingFilters: [],
};
const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    formSubmit(state: any, action: any) {
      state.carDetails.push({ ...action.payload });
      state.listingFilters.push({ ...action.payload });
    },
    filterHandler(state: any, action: any) {
      state.carDetails.splice(0, state.carDetails.length);
      state.carDetails.push(...action.payload);
    },
  },
});

export const formDataActions = formDataSlice.actions;
export default formDataSlice.reducer;
