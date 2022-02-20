import { ActionTypes} from "../constance/action-types"

const initialState = {
    albumData: [],
    isLoading : false,
    isError :  false,
};


export const albumReducer = (state = initialState , action) =>{
      switch (action.type){
          case ActionTypes.SET_DATA:
              return {...state, 
                isLoading:true,
                isError: false,
            };
            case ActionTypes.SELECTED_DATA:
                return {...state, 
                    albumData:action.albumData,
                    isLoading: false,
                };
           default:
               return state;   
      }
}