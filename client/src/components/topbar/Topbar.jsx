import "./topbar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Topbar() {
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
      <div className="topbarRight">
        <div className="topbarLinks">
        <span className="topbarLink" onClick={loginOnClick}>Client Log In</span>
        <span className="topbarLink" onClick={logoutOnClick}>Log Out</span>
            <Link to="/TextNotifications">
              <span className="topbarLink">Text Notifications</span>
            </Link>
            <span className="topbarLink">About</span>
            <span className="topbarLink">Contact Us</span>
        </div>
      </div>
    </div>
  );
}
