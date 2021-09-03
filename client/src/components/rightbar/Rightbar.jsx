import "./rightbar.css";

export default function Rightbar({ user }) {

    const HomeRightbar = () => {
      return (
        <>
        </>
      );
    };

    const ProfileRightbar = () => {
      return (
        <>
        </>
      );
    };
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    );
  }
