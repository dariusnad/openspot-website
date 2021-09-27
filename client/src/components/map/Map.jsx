import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.2488,
      lng: -122.9805
    },
    zoom: 20
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBcSZYEwllcuU3vYgA_cKeNRGLeuA9JLsU' }}
          options={map => ({ mapTypeId: map.MapTypeId.SATELLITE })}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
