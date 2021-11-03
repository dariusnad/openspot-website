import React, { Component } from 'react';
import axios from "axios";
import { GoogleMap, LoadScript, Polygon} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '750px'
};

const park_bounds = {
  north: 49.238530,
  south: 49.237567,
  east:  -123.073509,
  west: -123.075574
}


const mapOptions = {
  tilt:0,
  mapTypeId:"satellite",
  restriction: {
    latLngBounds: park_bounds,
    strictBounds: true,
  }
}

const center = {
  lat: 	49.237955,
  lng: -123.074673
};


class GMap extends Component {
  constructor(props)
  {
    super(props);
  
    this.state = {
      parking_spots: []
    }
    this.get_parking_spots = this.get_parking_spots.bind(this);
  } 

  async get_parking_spots() {
    axios.get("/map/spots/Kensington")
    .then(res => {
      try {
        let tmpArray = []
        //Push the polygon coordinates into an array
        for (var i = 0; i < res.data.length; i++) {
           tmpArray.push(res.data[i].polygons)
        }
        this.setState(
          {parking_spots: tmpArray
          });
      } catch (err) {
        console.log(err);
      }
    })
  }

componentDidMount()
{
  //Send the get request and retreive the spots
  this.get_parking_spots();
}

renderpolygons = () => {
  //Wait for the parking spots array to have coordinates in them
  if(this.state.parking_spots.length !== 0)
  {
    return this.state.parking_spots.map((location, i) => {
      return <Polygon
      options={{fillColor: "green", fillOpacity: 1}}
      paths = {this.state.parking_spots[i]}
       />
    })
  }
}

  render() {
    return (
    <LoadScript
        googleMapsApiKey="AIzaSyBcSZYEwllcuU3vYgA_cKeNRGLeuA9JLsU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={21}
          options={mapOptions}
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