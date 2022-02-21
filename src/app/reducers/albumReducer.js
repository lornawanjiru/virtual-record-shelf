import { ActionTypes} from "../constance/action-types"

const initialState = require('../../features/data.json')


export const albumReducer = (state = initialState, action)=>{
      switch (action.type){
          case ActionTypes.SET_DATA:
              return state;
           default:
               return state;   
      }
}