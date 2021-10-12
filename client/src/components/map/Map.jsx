import React, { Component } from 'react';
import { GoogleMap, LoadScript, Rectangle} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const mapOptions = {
  tilt:0,
  mapTypeId:"satellite"
}

const center = {
  lat: 	49.237955,
  lng: -123.074673
};

const bounds_1 = {
  north: 49.237937,
  south: 49.237894,
  east: -123.074585,
  west: -123.074620
};

const bounds_2 = {
  north: 49.237937,
  south: 49.237894,
  east: -123.074551,
  west: -123.074620
};

const bounds_3 = {
  north: 49.237937,
  south: 49.237894,
  east: -123.074517,
  west: -123.074551
};

const bounds_4 = {
  north: 49.238002,
  south: 49.237956,
  east: -123.074515,
  west: -123.074550
};

const bounds_5 = {
  north: 49.238119,
  south: 49.238061,
  east: -123.074493,
  west: -123.074528
};

class Map extends Component {
  render() {
    return (
    <LoadScript
        googleMapsApiKey="AIzaSyBcSZYEwllcuU3vYgA_cKeNRGLeuA9JLsU"
      >
    <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
          options = {mapOptions}
        >
    <Rectangle
      options={{ strokeOpacity: 0.8, fillColor:"#00FF00"}}
      bounds={bounds_1}
    />
    <Rectangle
      options={{ strokeOpacity: 0.8, fillColor:"#00FF00"}}
      bounds={bounds_2}
    />
    <Rectangle
      options={{ strokeOpacity: 0.8, fillColor:"#00FF00"}}
      bounds={bounds_3}
    />
    <Rectangle
      options={{ strokeOpacity: 0.8, fillColor:"#FF0000"}}
      bounds={bounds_4}
    />
    <Rectangle
      options={{ strokeOpacity: 0.8, fillColor:"#FF0000"}}
      bounds={bounds_5}
    />
      </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;