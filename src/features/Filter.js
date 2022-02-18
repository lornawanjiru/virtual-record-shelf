import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
    return (
      <div className="filter">
        <div id="filtercover">
        <form method="get" action="">
            <div className="tb">
            <div className="td">
                <button type="submit">
                   <FontAwesomeIcon icon={faFilter}/>
                </button>
            </div> 
            <div className="td"><input type="text" placeholder="filter" required/></div>
            </div>
        </form>
       </div>
      </div>
        
    );
}

export default Filter;