import React from "react"
import GoogleMapReact from "google-map-react"
import styled from "styled-components"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => (
  <GoogleMap>
    <GoogleMapReact
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
    >
      <AnyReactComponent
        lat={40.747331}
        lng={-73.851744}
        text={`Diamond Opticians`}
      />
    </GoogleMapReact>
  </GoogleMap>
)

Map.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

export default Map

const GoogleMap = styled.div`
  height: 100vh;
  width: 100%;
`
