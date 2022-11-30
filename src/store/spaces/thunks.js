import axios from "axios";
import { apiUrl } from "../../config/constants";
import { useSelector } from "react-redux";
import { selectToken } from "../user/selectors";
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

export const deleteOneStory = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.delete(`${apiUrl}/story/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("delete thunk works", response.data);
  } catch (e) {
    console.log(e.message);
  }
};

// fetchSpaces();
