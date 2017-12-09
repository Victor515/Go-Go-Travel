import React, { Component } from 'react'
import { Button, Card, Image, Dropdown } from 'semantic-ui-react'
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
        content: [],
        new_content: [],
        marker_con: []

      }
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClicked = this.onMapClicked.bind(this);
      this.money = this.money.bind(this);
  }

  componentDidMount() {
      console.log("Did");
      axios.get('/api/collections')
        .then((res) => {
            this.state.content = res.data.data;
            this.state.new_content = res.data.data;
            console.log(this.state.content);
            this.setState({
              //lifecycle trigger
            });
        })
        .catch((error) => {
            console.log(error);
        });
  }

  onMarkerClick(props, marker, e) {
    console.log("click");
    this.setState({
      activeMarker: marker,
      marker_con: props.m,
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

  money(e, props) {
    console.log("change money");
    console.log(props.value);
    let temp_content = [];
    for (let i = 0; i < this.state.content.length; i++) {
      if (this.state.content[i].money < props.value && this.state.content[i].money > props.value - 200) {
        temp_content.push(this.state.content[i]);
        console.log(temp_content);
      }
    }
    this.setState({
      showingInfoWindow: false,
      new_content: temp_content
    });
  }

  render() {
      console.log("render");

      const map = {
        position: 'absolute',
        top: '15%',
        left: '3%',
        height: '80%',
        width: '67%'
      };

      const title = {
        position: 'absolute',
        top: '8%',
        left: '3%'
      };

      const search = {
        position: 'absolute',
        top: '8%',
        left: '70%'
      };

      const drop_money = {
        position: 'absolute',
        top: '15%',
        left: '73%',
        zIndex: '100'
      };

      const drop_day = {
        position: 'absolute',
        top: '30%',
        left: '73%',
        zIndex: '90'
      };

      return(
        <div>
          <Navbar />

          <h1 style = {title}>Explore the world</h1>
          <Dropdown style = {drop_money}
            options={[
              { key: '200', value: '200', text: '0-200' },
              { key: '400', value: '400', text: '200-400' },
            ]}
            placeholder='Select'
            selection
            onChange = {this.money}
          />
          <Dropdown style = {drop_day}
            options={[
              { key: '2', value: '2', text: '2' },
              { key: '3', value: '3', text: '3' },
            ]}
            placeholder='Select'
            selection
          />

          <h1 style = {search}>Choose your place</h1>


          <div>
              <Map  style = {map}
                    google = {this.props.google}
                    onClick = {this.onMapClicked}
                    zoom = {6}
                    initialCenter = {{
                      lat: 41.8566,
                      lng: -88.3522
                    }}>

                    {this.state.new_content
                      .map((pos) =>
                      {let lat_long = {lat: pos.Latitude, lng: pos.Longitude};
                        return (
                        <Marker key = {pos._id}
                          m = {pos}
                          position = {lat_long}
                          onClick = {this.onMarkerClick}
                        />);
                      }
                    )}

                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                      <div className = "info">
                        <h2 className = "cityname">{this.state.marker_con.card_name}</h2>
                        <p className = "username">By:&nbsp;{this.state.marker_con.username}</p>
                        <h5 className = "spend">Spend:&nbsp;${this.state.marker_con.money}</h5>
                        <h5 className = "day">Time:&nbsp;{this.state.marker_con.day}&nbsp;Days</h5>
                        <p className = "comment">{this.state.marker_con.post_txt}</p>
                        <Image className = "im" href = '/detail' src = {this.state.marker_con.picture}/>
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
