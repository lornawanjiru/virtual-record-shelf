import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => (

    <div id="cover" className='search'>
        <form method="get" action="">
            <div className="tb">
            <div className="td">
                <button type="submit">
                   <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div> 
            <div className="td"><input type="text" placeholder="Search" required/></div>
           
            </div>
        </form>
    </div>
);

export default SearchBar;