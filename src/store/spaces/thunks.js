import axios from "axios";
import { apiUrl } from "../../config/constants";
import { allSpacesFetched, oneSpaceFetched } from "./slice";

export const fetchSpaces = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/`);
  //   console.log("data in space thunk", response);
  dispatch(allSpacesFetched(response.data));
};

export const fetchOneSpace = (id) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/spaces/${id}`);
  // console.log("one Space thunk", response);
  dispatch(oneSpaceFetched(response.data));
};

// fetchSpaces();
