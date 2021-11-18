import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      curParkingLot : "Kensignton",
      menuOpen: false,
      parkingLotList : []
    }

    this.changeParkingLot = this.changeParkingLot.bind(this)
    this.getParkingLots = this.getParkingLots.bind(this)
  } 

  changeParkingLot(e) {
    var parkingLotName = e.target.innerText;
    this.setState({
      curParkingLot : parkingLotName,
      menuOpen : false
    })
    console.log(this.state.curParkingLot);
  }

  getParkingLots() {
    // GET request for the available parking lot names
    var resParkingLots = ["Kensignton", "Soroush Backyard", "test"]
    this.setState({
      curParkingLot : resParkingLots[0],
      parkingLotList : resParkingLots
    })
    return
  }

  genMenuList = () => {
    this.getParkingLots();    
    var menuItems = [];
    console.log(this.state.parkingLotList)
    for (var i = 0; i < this.state.parkingLotList.length; i++) {
      menuItems.push(
        <a onClick={(e) => this.changeParkingLot(e)} className="menu-item">
          {this.state.parkingLotList[i]}
        </a>
      )
    }
    return menuItems;
  }
  
  render(){
    const menuItems = this.genMenuList()
    return (
      <Menu>
        {menuItems}
      </Menu>
    )
  }
  
}
export default Sidebar;