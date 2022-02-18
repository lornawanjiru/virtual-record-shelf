import { useSelector } from 'react-redux'
import AlbumItems from "./AlbumItems"


const selectAlbum = (state) => state.albums

const AlbumList = () =>{
const albums = useSelector(selectAlbum)

  const renderedListAlbum = albums.map(albo => {
    return <AlbumItems key = {albo.id} albo ={albo}/>
  })
  return 
     <div className="container"> {renderedListAlbum} </div>
  
}

export default AlbumList;