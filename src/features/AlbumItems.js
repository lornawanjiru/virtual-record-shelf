import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { requestAlbum } from "../app/actions/Albumaction";
import data from "../app/actions/data.json"



const Album = () => {
  const {albumData, isLoading} = useSelector((state) => state);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(requestAlbum(data));
  }, []);
    return (
      <>
      {isLoading && <div className="loading">Data loading...</div>}
     
      {albumData.map((album) => {
        return(
          <div className="album" key={album.id}>
            <div className="album-image">
            {/* <img src={album.image} alt={album.name}/> */}
            </div>
            <div className="album-details">
              <p>{album.name}</p>
              <h1>{album.name} </h1>
                <h3> By {album.artistname} </h3>
            </div>
          </div>
        );
      })}
      </>  
    );
  

}

export default Album;