import Track from "./Tracks";
import { useSelector } from 'react-redux'

const Album = () => {
  const albums = useSelector((state) => state.allalbums.albums)
  
  
  const renderList = albums.map((album) =>{
    return (
      <>
      <div className="album">
        <div className="album-image">
           <img src="./album.jpeg"/>
        </div>
        <div className="album-details">
           <p>{Album}</p>
           <h1>{Title} </h1>
           <h3> By {Artist} </h3>
        </div>
      </div>
      <Track/>
      </>  
    );
  })
  return 

}

export default Album;