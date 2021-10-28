import React, { Component } from 'react';
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
  state = {
    locations:
    [
    {
      "position" : [{lat: 49.2381108, lng: -123.0749832}, {lat: 49.2380661, lng: -123.0749812}, {lat: 49.2380666, lng: -123.0749558}, {lat: 49.2381112, lng: -123.0749558}, {lat: 49.2381108, lng: -123.0749832}]
    },
    {
      "position" : [{lat: 49.2381105, lng: -123.0749449}, {lat: 49.2380663, lng: -123.074945}, {lat: 49.2380654, lng: -123.0749194}, {lat: 49.2381114, lng: -123.0749175}, {lat: 49.2381105, lng: -123.0749449}]
    },
    {
      "position" : [{lat: 49.238111, lng: -123.0749108},
        {lat: 49.2380677, lng: -123.0749114},
        {lat: 49.2380677, lng: -123.0748846},
        {lat: 49.2381106, lng: -123.0748859},
        {lat: 49.238111, lng: -123.0749108}]
    }
  ]
  };
  renderpolygons = () => {
    return this.state.locations.map((location, i) => {
      return <Polygon
      options={{fillColor: "green", fillOpacity: 1}}
      paths = {location.position}
       />
    })
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