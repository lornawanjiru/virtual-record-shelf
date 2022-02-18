
import "./App.css"
import AlbumList from "./features/Album";
import Album from './features/AlbumItems';
import Nav from './features/Nav';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

const App = () => {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Routes>
          <Route path="/"  element = {<AlbumList/>}/>
          <Route path="/album/:albumId" element={<Album/>}/>
          <Route> 404 PAGE NOT FOUND </Route>
          </Routes>
        </Router>
      </div>
        
    );
}

export default App;