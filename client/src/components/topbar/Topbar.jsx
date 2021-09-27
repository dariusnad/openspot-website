import "./topbar.css";
import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function Topbar() {
  //const { user } = useContext(AuthContext);
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();

  const logoutOnClick = (e)=>{
    localStorage.clear();
    e.preventDefault();
    history.push("/login");
    window.location.reload();
  }
  
  const loginOnClick = (e)=>{
    localStorage.clear();
    e.preventDefault();
    history.push("/login");
    window.location.reload();
  }
  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">OpenSpot</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <button className="topbarLink" onClick={loginOnClick}>
              Client Log In
        </button>
        <button className="topbarLink" onClick={logoutOnClick}>
              Client Log Out
        </button>
            <button className="topbarLink">
              Text Notifications
        </button>
            <button className="topbarLink">
              About
        </button>
            <button className="topbarLink">
              Contact
        </button>
        </div>
        {/* <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link> */}
      </div>
    </div>
  );
}
