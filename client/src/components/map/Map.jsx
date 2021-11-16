import React, { Component} from 'react';
import axios from "axios";
import { GoogleMap, LoadScript, Polygon} from '@react-google-maps/api';


const containerStyle = {
  width: '75%',
  height: '700px'
};


class GMap extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      parking_spots: [],
      lot_bounds: [],
      lot_center: [],
      mapoptions: {
        tilt: 0,
        mapTypeId: "satellite",
        streetViewControl: false,
        mapTypeControl: false,
        restriction: 
        {
          latLngBounds: [],
          strictBounds: true,
        }
      }
    }
    this.get_parking_spots = this.get_parking_spots.bind(this);
    this.get_parking_lot_info = this.get_parking_lot_info.bind(this);

    this.get_parking_lot_info();

  } 

  async get_parking_spots() {
    axios.get("/map/spots/Kensington")
    .then(res => {
      try {
        let tmpArray = []
        //Push the polygon coordinates into an array
        for (var i = 0; i < res.data.length; i++) {
           tmpArray.push(res.data[i])
        }
        this.setState(
          {parking_spots: tmpArray
          });
      } catch (err) {
        console.log(err);
      }
    })
  }

  async get_parking_lot_info() {
  axios.get("/map/parking_lot/Kensington Progress Update Demo")
  .then(res => {
    try {
      this.setState(prevstate =>
        ({
          ...prevstate,
          mapoptions: {
            ...prevstate.mapoptions,
            restriction: {
                ...prevstate.mapoptions.restriction, 
                   latLngBounds: res.data[0].bounds
                }
            },
            lot_center : res.data[0].center
        }
        ))
    }
     catch (err) {
      console.log(err);
    }
})
}

componentDidMount()
{
  //Initial call to retrieve data from DB
  this.get_parking_spots();
  //Timer to refresh component every thirty seconds and update spots
  this.interval = setInterval(() => {this.get_parking_spots()}, 30000);
}

componentWillUnmount() 
{
  clearInterval(this.interval);
}

renderpolygons = () => {
  //Wait for the parking spots array to have coordinates in them
  if(this.state.parking_spots.length !== 0)
  {
    return this.state.parking_spots.map((location, i) => {
      return <Polygon
      options={{fillColor: this.state.parking_spots[i].occupied ? "red" : "green", fillOpacity: 1}}
      paths = {this.state.parking_spots[i].polygons}
       />
    })
  }
}

  render() {
    if(this.state.mapoptions.restriction.latLngBounds === null)
    {
      <div>Loading...</div>
    }
    return (
    <LoadScript
        googleMapsApiKey="AIzaSyBcSZYEwllcuU3vYgA_cKeNRGLeuA9JLsU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.lot_center}
          zoom={1}
          options={this.state.mapoptions}
        >
          <div>
          {this.renderpolygons()}
          </div>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default GMap;