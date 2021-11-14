import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      parkingLot : "Kensignton",
      menuOpen: false
    }

    this.changeParkingLot = this.changeParkingLot.bind(this)
  } 

  changeParkingLot(e) {
    var parkingLotName = e.target.innerText;
    this.setState({
      parkingLot : parkingLotName,
      menuOpen : false
    })
    console.log(this.state.parkingLot);
  }

  render(){
    return (
      <Menu>
        <a onClick={(e) => this.changeParkingLot(e)} className="menu-item">
          Home
        </a>
  
        <a onClick={(e) => this.changeParkingLot(e)} className="menu-item" >
          About
        </a>
  
        <a onClick={(e) => this.changeParkingLot(e)} className="menu-item" >
          Services
        </a>
  
        <a onClick={(e) => this.changeParkingLot(e)} className="menu-item" >
          Contact us
        </a>
      </Menu>
    )
  }
  
}
export default Sidebar;