import "./rightbar.css";
import Map from "../map/Map";

export default function Rightbar({ user }) {

    const HomeRightbar = () => {
      return (
        <>
          <h4>Map View:</h4><br></br>
          <Map />
          <br></br>
        </>
      );
    };

    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          <HomeRightbar />
        </div>
      </div>
    );
  }
