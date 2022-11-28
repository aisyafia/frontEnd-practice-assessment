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
    oneSpaceFetched: (state, action) => {
      // console.log("action 2:", action);
      state.spaceDetails = action.payload.stories;
    },
    signUpSuccess: (state, action) => {
      console.log("signup action", action);
      state.spaces = [...state.spaces, action.payload.space];
    },
  },
});

export const { allSpacesFetched, oneSpaceFetched, signUpSuccess } =
  spaceSlice.actions;

export default spaceSlice.reducer;
