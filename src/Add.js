import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus} from "@fortawesome/free-solid-svg-icons";


const Addmusic = () => (

    <div className='addmusic'>
        <form method="get" action="">
            <div className="tb">
            <div className="td">
                <button type="submit">
                   <FontAwesomeIcon icon={faCirclePlus}/>
                </button>
            </div> 
            <div className="td"><input type="text" placeholder="Add new Album " required/></div>
           
            </div>
        </form>
    </div>
);

export default Addmusic;