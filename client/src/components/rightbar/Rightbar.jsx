import "./rightbar.css";
import Map from "../map/Map";
import Text from "../text/Text";

export default function Rightbar({ user }) {
    return (
      <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <HomeRightbar />
        </div>
      </div>
      <Text />
      </>
    );
  }

  const HomeRightbar = () => {
    return (
      <>
        <Map />
      </>
    );
  };
