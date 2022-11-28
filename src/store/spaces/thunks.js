import axios from "axios";
import { apiUrl } from "../../config/constants";
import { allSpacesFetched } from "./slice";

export const fetchSpaces = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/`);
  //   console.log("data in space thunk", response);
  dispatch(allSpacesFetched(response.data));
};

// fetchSpaces();
