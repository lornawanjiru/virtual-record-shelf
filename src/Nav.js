import Filter from './Filter';
import Search from './search';
import Add from "./Add"
import Checklist from './Check';


const Nav = () => {
    return (
      <div className="nav">
        <Search/>
        <Checklist/>
        <Filter/> 
        <Add />
      </div>
        
    );
}

export default Nav;