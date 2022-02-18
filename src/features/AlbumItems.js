import Track from "./Tracks";

const Album = () => {
  
    return (
      <>
      <div className="album">
        <div className="album-image">
           <img src="./album.jpeg"/>
        </div>
        <div className="album-details">
           <p>3030</p>
           <h1>HAVANA</h1>
           <h3>By: Camila </h3>
        </div>
      </div>
      <Track/>
      </>  
    );
}

export default Album;