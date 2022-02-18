
import "./App.css"
import AlbumList from "./features/Album";
import Album from './features/AlbumItems';
import Nav from './features/Nav';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

const App = () => {
    return (
      <div className="App">
        <Nav />
        {/* <div className="container">
          <AlbumList/>
        </div> */}
      </div>
        
    );
}

export default App;