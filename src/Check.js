import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Checklist = () => {
    return (
      <div className="Check">
        <div className="artist">
           <FontAwesomeIcon icon={faSquareCheck}/>
           <p>Artist</p>
        </div>
        <div className="albumcheck">
           <FontAwesomeIcon icon={faSquareCheck}/>
           <p className='checkdetails'>Album</p>
        </div>
      </div>
        
    );
}

export default Checklist;