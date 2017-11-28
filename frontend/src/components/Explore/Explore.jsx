import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import Navbar from '../Navbar/Navbar.jsx'

import styles from './styles.scss'

class Explore extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          pos_array: [{lat: 48.8566, lng: 2.3522}],
          content: "hhh",
          isLoggedIn: this.props.location.state.isLoggedIn
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    componentDidMount() {
        console.log("Did");
    }

    onMarkerClick(props, marker, e) {
      console.log("click");
      this.setState({
        activeMarker: marker,
        content: props,
        showingInfoWindow: true
      });
    }

    onMapClicked() {
      console.log("clicked");
      if (this.state.showingInfoWindow) {
        this.setState({
          activeMarker: null,
          showingInfoWindow: false
        })
      }
    }

    render() {
        console.log("render");
        return(
          <div>
            <Navbar isLoggedIn = {this.state.isLoggedIn} />

            <div className="Explore">
                <h1>Explore the world</h1>
                <Map  google={this.props.google}
                      onClick={this.onMapClicked}
                      zoom={4}
                      initialCenter={{
                        lat: 48.8566,
                        lng: 2.3522
                      }}>

                      {this.state.pos_array
                        .map((pos) =>
                        <Marker key = {pos.lat}
                          name={pos.lat}
                          position={pos}
                          onClick={this.onMarkerClick}
                        />
                      )}

                      <InfoWindow className = "info"
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                          <h1>Paris</h1>
                          <Image href = '/detail' src = "http://file27.mafengwo.net/M00/A6/E4/wKgB6lSXmh2AHszjAAeY4299Bu4731.gonglve.w680.png"/>

                        </div>
                      </InfoWindow>

                </Map>
            </div>
          </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAJNbOFFGV2FE-yLYI8L-XWK5GG3Gpb-2U"
})(Explore)
