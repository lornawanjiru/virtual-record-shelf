import { ActionTypes} from "../constance/action-types"

const initialState = {
    albums:[{
        Album : 3030,
        Title : "HAVANA",
        Artist : "Camila",
    },
],
}


export const albumReducer = (state = initialState , {type,payload}) =>{
      switch (type){
          case ActionTypes.SET_ALBUMS:
              return state;
           default:
               return state;   
      }
}