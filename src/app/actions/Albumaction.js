import { ActionTypes } from "../constance/action-types";




export const requestAlbum = (albums)  => {
    return{
      type: ActionTypes.SET_DATA,
      payload: albums,
    };
  };
    export const selectedAlbum = (album) =>{
      return {
        type: ActionTypes.SELECTED_DATA,
        payload: album,      
    };
  };