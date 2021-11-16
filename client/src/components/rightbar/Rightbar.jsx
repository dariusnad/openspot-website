import "./rightbar.css";
import Map from "../map/Map";

export default function Rightbar({ user }) {
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <HomeRightbar />
        </div>
      </div>
    );
  }

  const HomeRightbar = () => {
    return (
      <>
        <Map />
      </>
    );
  };
