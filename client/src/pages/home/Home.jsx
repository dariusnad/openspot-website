import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <Sidebar pageWrapId={"page-wrap"}/>
      {/* <div className="homeContainer">
       <Rightbar/>
      </div> */}
    </>
  );
}
