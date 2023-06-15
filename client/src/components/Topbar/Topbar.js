import "./Topbar.css"
import {Home,Timeline, Search, Person, Chat, Notifications } from "@mui/icons-material/";
import { useContext ,useRef } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import {useNavigate} from "react-router";



export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const friendName = useRef();


  const goToUser = ()=>{
    
    navigate(`/profile/${friendName.current.value}`);
}

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to ="/" style={{textDecoration:"none"}}>
        <span className="logo">Skulga</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <form className="searchbar" onSubmit={goToUser}>
          <Search className="searchIcon" onClick={goToUser} />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
            ref={friendName}
            
          />
          
        </form>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <Home />
          </span>
          <span className="topbarLink">
            <Timeline />
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/default.png"} alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  )
}
