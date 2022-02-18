import { ActionTypes } from "../constance/action-types"

export const setAlbum = (albums) =>{
    return{
        types:ActionTypes.SET_ALBUMS,
        payload : albums,
    };
};
export const selectedAlbum = (albums) =>{
    return{
        types:ActionTypes.SELECTED_ALBUMS,
        payload : album,
    };
};
// export const setAlbum = (albums) =>{
//     return{
//         types:ActionTypes.SET_ALBUMS,
//         payload : albums
//     };
// }; 