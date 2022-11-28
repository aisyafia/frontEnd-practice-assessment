import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: null,
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState: initialState,
  reducers: {
    allSpacesFetched: (state, action) => {
      // console.log("action 1: ", action);
      state.spaces = action.payload;
    },
  },
});

export const { allSpacesFetched } = spaceSlice.actions;

export default spaceSlice.reducer;
