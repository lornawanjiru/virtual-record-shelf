
import "./App.css"

import Album from './features/AlbumItems';
import Nav from './features/Nav';


const App = () => {
    return (
      <div className="App">
        
          <Nav />
          <div className="container">
          <Album/>
          </div>
      </div>
        
    );
}

export default App;