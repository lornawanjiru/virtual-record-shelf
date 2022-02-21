
import { useDispatch, useSelector } from 'react-redux'
import AlbumItems from "./AlbumItems"
import axios from "axios"
import { useEffect } from 'react'
import { requestAlbum } from '../app/actions/Albumaction'
import info from './data.json'


const Albumcomponent = () =>{

    const albums = useSelector((state) => state.allalbums.albums)
    const dispatch = useDispatch();
    
    const fetchAlbums = async() =>{
        const response = await axios
        .get (info)
        .catch((err)=> {
            console.log("Err", err);
        });
        dispatch(requestAlbum (response.data));
    };
    useEffect(()=>{
       fetchAlbums();
    },[]);
    console.log("Albums:", albums)
  return (
    <div>
         <AlbumItems/>
    </div>
  );
}
export default Albumcomponent;
