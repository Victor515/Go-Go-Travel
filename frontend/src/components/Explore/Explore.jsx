import React, { Component } from 'react'
import { Button, Card, Image, Dropdown, Segment} from 'semantic-ui-react'
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
          content: "hhh"
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

        const map = {
          position: 'absolute',
          top: '15%',
          left: '3%',
          height: '80%',
          width: '47%'
        };

        const title = {
          position: 'absolute',
          top: '8%',
          left: '3%'
        };

        const search = {
          position: 'absolute',
          top: '8%',
          left: '53%'
        };

        const drop = {
          position: 'absolute',
          top: '15%',
          left: '53%'
        };

        return(
          <div>
            <Navbar />

            <h1 style = {title}>Explore the world</h1>
            <h1 style = {search}>Choose your place</h1>
            <div style = {drop}>
              <Dropdown options={[
                          { key: 'Male', value: 'Male', text: 'Male' },
                          { key: 'Female', value: 'Female', text: 'Female' },
                        ]}
                        placeholder='Select'
                        selection
              />
            </div>


            <div>
                <Map  style = {map}
                      google={this.props.google}
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

                      <InfoWindow
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
