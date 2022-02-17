import Filter from './Filter';
import Search from './search';

const Nav = () => {
    return (
      <div className="nav">
        <Search/>
        <Filter/>
      </div>
        
    );
}

export default Nav;