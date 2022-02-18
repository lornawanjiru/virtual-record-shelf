import { useDispatch, useSelector } from 'react-redux'
import AlbumItems from "./AlbumItems"
import axios from "axios"
import { useEffect } from 'react'
import { setAlbum } from '../app/actions/Albumaction'


const AlbumList = () =>{
    const albums = useSelector((state) => state)
    const dispatch = useDispatch(); 


    const fetchAlbums = async() =>{
        const response = await axios
        .get ("https://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=2119102d0db0ba625b9b1185246cb17a&artist=?&album=?&format=json")
        .catch((err)=> {
            console.log("Err", err);
        });
        dispatch(setAlbum (response.data));
    };
    useEffect(()=>{
       fetchAlbums();
    },[]);
    console.log("Albums:", albums)
  return (
    <div className="container">
         <AlbumItems/>
    </div>
  )
  
}

export default AlbumList;