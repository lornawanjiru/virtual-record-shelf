
import "./App.css"
import Album from './albums';
import Nav from './Nav';


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