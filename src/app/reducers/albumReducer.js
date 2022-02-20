import { ActionTypes} from "../constance/action-types"

const initialState = {
   albums:[
    {
        "id": "50ca839e-cfae-413d-a555-c287a4a0395e",
        "artistId": "70fac1fa-9ed1-43bc-92f0-0032ea140fe8",
        "artistname": "Pink Floyd",
        "image":"1.jpg",
        "name": "Wish You Were Here"
      },
      {
        "id": "807d4c2a-1593-482a-963e-02c25eed7423",
        "artistId": "3a82d368-afcb-4e54-b678-f1b0e0828703",
        "artistname": "King Crimson",
        "image": "2.jpeg",
        "name": "In the Court of the Crimson King"
      }
   ],
   tracks:[
       {
        "id":"1",
        "title":"Silence",
        "length":"4.9",
        "albumname":"Wish You Were Here"
       },
       {
        "id":"2",
        "title":"Silencer",
        "length":"1.9",
        "albumname": "In the Court of the Crimson King"
       }, 
       {
        "id":"1",
        "title":"Happy",
        "length":"4.9",
        "albumname":"Wish You Were Here"
       },
       {
        "id":"1",
        "title":"Hello",
        "length":"4.9",
        "albumname":"Wish You Were Here"
       },
       {
        "id":"2",
        "title":"Jugde",
        "length":"2.9",
        "albumname": "In the Court of the Crimson King"
       }, 
   ]
};


export const albumReducer = (state = initialState, {type,payload}) =>{
      switch (type){
          case ActionTypes.SET_DATA:
              return state;
           
           default:
               return state;   
      }
}