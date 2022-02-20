import React from "react";
import { useSelector} from 'react-redux'
import Track from "./Track";

 
 
const Album = () => {
  const albums = useSelector((state) => state.allalbums.albums);
  const renderList = albums.map((album) =>{
    const {name,id,artistname,image} = album; 
    return (
      <>
          <div className="album" key={id}>
            <div className="album-image">
            <img src={image}alt={name}/>
            </div>
            <div className="album-details">
              <p>{name}</p>
              <h1>{name} </h1>
                <h3> By {artistname} </h3>
            </div>
           
          </div>
          <Track />
      </>  
    );
  })
  return(
     <div> {renderList } </div>
  ); 

}

export default Album;