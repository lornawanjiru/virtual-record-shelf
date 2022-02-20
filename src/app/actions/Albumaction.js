import { ActionTypes } from "../constance/action-types";
import axios from "axios";



export const requestAlbum = (data) => async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_DATA,
    });
    try {
      const json = await axios.get("data.json");
      console.log(json);
      dispatch({
        type: ActionTypes.SELECTED_DATA,
        usersData: json.data,
        isError: false,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.SELECTED_DATA,
        usersData: [],
        isError: true,
      });
    }
  };