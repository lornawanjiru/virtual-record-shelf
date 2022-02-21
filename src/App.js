
import "./App.css"
import Albumcomponent from "./features/Albumcomponent";
import Nav from './features/Nav';


const App = () => {
    return (
      <div className="App">
        
          <Nav />
          <div className="container">
          <Albumcomponent/>
          </div>
      </div>
        
    );
}

export default App;