import React, { Component } from 'react'
import { Button, Card, Image, Dropdown, Input, Item, Grid, Rating, Icon} from 'semantic-ui-react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import Navbar from '../Navbar/Navbar.jsx'

import styles from './styles.scss'

class Explore extends Component {

  constructor(props) {
      super(props);
      this.state = {
        content: [],
        new_content: [],
        model_content: [],
        marker_con: [],
        info: false,
        model: false
      }
      this.minm = 0;
      this.maxm = 999999999;
      this.mind = 0;
      this.maxd = 999999999;
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClicked = this.onMapClicked.bind(this);
      this.search = this.search.bind(this);
      this.money_c1 = this.money_c1.bind(this);
      this.money_c2 = this.money_c2.bind(this);
      this.day_c1 = this.day_c1.bind(this);
      this.day_c2 = this.day_c2.bind(this);
      this.getmore = this.getmore.bind(this);
      this.close = this.close.bind(this);
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
      marker_con: props.m,
      info: true
    });
  }

  onMapClicked() {
    console.log("clicked");
    this.setState({
      info: false
    });
  }

  search() {
    console.log("change money");
    console.log(this.minm);
    console.log(this.maxm);
    console.log(this.mind);
    console.log(this.maxd);
    let temp_content = [];
    for (let i = 0; i < this.state.content.length; i++) {
      if (this.state.content[i].money <= this.maxm && this.state.content[i].money >= this.minm
      && this.state.content[i].day <= this.maxd && this.state.content[i].day >= this.mind) {
        temp_content.push(this.state.content[i]);
      }
    }
    console.log(temp_content);
    this.setState({
      info: false,
      model: false,
      new_content: temp_content
    });
  }

  money_c1(e) {
    this.minm = e.target.value;
  }
  money_c2(e) {
    this.maxm = e.target.value;
  }
  day_c1(e) {
    this.mind = e.target.value;
  }
  day_c2(e) {
    this.maxd = e.target.value;
  }

  close() {
    this.setState({
      model: false
    });
  }

  getmore() {
    console.log("more");
    let temp_content = [];
    for (let i = 0; i < this.state.new_content.length; i++) {
      if (this.state.new_content[i].Latitude == this.state.marker_con.Latitude &&
      this.state.new_content[i].Longitude == this.state.marker_con.Longitude) {
        temp_content.push(this.state.new_content[i]);
      }
    }
    console.log(temp_content);
    this.setState({
      model_content: temp_content,
      model: true
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

      const money1 = {
        position: 'absolute',
        top: '15%',
        left: '71%',
        zIndex: '100'
      };
      const money2 = {
        position: 'absolute',
        top: '15%',
        left: '87%',
        zIndex: '100'
      };
      const day1 = {
        position: 'absolute',
        top: '21%',
        left: '71%',
        zIndex: '100'
      };
      const day2 = {
        position: 'absolute',
        top: '21%',
        left: '87%',
        zIndex: '100'
      };

      const sub = {
        position: 'absolute',
        top: '27%',
        left: '93%',
        zIndex: '100'
      };

      const extra = (
        <div>
          <h5 className = "spend">Spend:&nbsp;${this.state.marker_con.money}</h5>
          <h5 className = "day">Time:&nbsp;{this.state.marker_con.day}&nbsp;Days</h5>
        </div>
      )
      if (this.state.model) {
        return(
          <div>
            <Navbar/>
            <h1 style = {title}>Explore the world</h1>
            <Input
              style = {money1}
              onChange = {this.money_c1}
              placeholder='Min Spend'
            />
            <Input
              style = {money2}
              onChange = {this.money_c2}
              placeholder='Max Spend'
            />
            <Input
              style = {day1}
              onChange = {this.day_c1}
              placeholder='Min Day'
            />
            <Input
              style = {day2}
              onChange = {this.day_c2}
              placeholder='Max Day'
            />
            <Button style = {sub} onClick = {this.search}>Search</Button>
            <div className = "bac">
              <a className = "close" onClick = {this.close}>
                Go Back
              </a>
              <div className = "model">
                <Grid divided>
                  <Grid.Row>
                      <Card.Group itemsPerRow={2}>

                {this.state.model_content
                  .map((pos) =>
                  {
                    return (
                      <Card color='teal' key = {pos.card_name}>
                        <Image src={pos.picture} />
                        <Card.Content>
                          <Card.Header>
                            {pos.card_name}
                          </Card.Header>
                          <Card.Meta>
                            {pos.username}
                          </Card.Meta>
                          <Card.Description className = "des">
                            {pos.post_txt}
                          </Card.Description>
                          <Card.Description>
                           <Rating icon='star' defaultRating={4.5} maxRating={5} />
                          </Card.Description>
                          <Card.Description>
                            <Icon name='dollar' />
                            1000
                          </Card.Description>

                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='heart' />
                            22
                            <Icon name='signup' />
                            20
                            <a><Icon name='bookmark' /></a>

                        </Card.Content>
                      </Card>);
                  }
                )}
                      </Card.Group>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
            <h1 style = {search}>Choose your place</h1>
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
                  <div className = "mar">
                    <Card color='teal' key = {this.state.marker_con.card_name}>
                        <Image src={this.state.marker_con.picture} />
                        <Card.Content>
                          <Card.Header>
                            {this.state.marker_con.card_name}
                          </Card.Header>
                          <Card.Meta>
                            {this.state.marker_con.username}
                          </Card.Meta>
                          <Card.Description className = "des">
                            {this.state.marker_con.post_txt}
                          </Card.Description>
                          <Card.Description>
                           <Rating icon='star' defaultRating={4.5} maxRating={5} />
                          </Card.Description>
                          <Card.Description>
                            <Icon name='dollar' />
                            1000
                          </Card.Description>

                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='heart' />
                            22
                            <Icon name='signup' />
                            20
                            <a><Icon name='bookmark' /></a>
                            <a className = "more" onClick = {this.getmore}>Get More</a>
                        </Card.Content>
                    </Card>
                  </div>
            </Map>
          </div>
        )
      } else {
        if (this.state.info) {
          return(
            <div>
              <Navbar/>
              <h1 style = {title}>Explore the world</h1>
              <Input
                style = {money1}
                onChange = {this.money_c1}
                placeholder='Min Spend'
              />
              <Input
                style = {money2}
                onChange = {this.money_c2}
                placeholder='Max Spend'
              />
              <Input
                style = {day1}
                onChange = {this.day_c1}
                placeholder='Min Day'
              />
              <Input
                style = {day2}
                onChange = {this.day_c2}
                placeholder='Max Day'
              />
              <Button style = {sub} onClick = {this.search}>Search</Button>
              <h1 style = {search}>Choose your place</h1>



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

                    <div className = "mar">
                      <Card color='teal' key = {this.state.marker_con.card_name}>
                          <Image src={this.state.marker_con.picture} />
                          <Card.Content>
                            <Card.Header>
                              {this.state.marker_con.card_name}
                            </Card.Header>
                            <Card.Meta>
                              {this.state.marker_con.username}
                            </Card.Meta>
                            <Card.Description className = "des">
                              {this.state.marker_con.post_txt}
                            </Card.Description>
                            <Card.Description>
                             <Rating icon='star' defaultRating={4.5} maxRating={5} />
                            </Card.Description>
                            <Card.Description>
                              <Icon name='dollar' />
                              1000
                            </Card.Description>

                          </Card.Content>
                          <Card.Content extra>
                              <Icon name='heart' />
                              22
                              <Icon name='signup' />
                              20
                              <a><Icon name='bookmark' /></a>
                              <a className = "more" onClick = {this.getmore}>Get More</a>
                          </Card.Content>
                      </Card>
                    </div>
              </Map>
            </div>
          )
        } else {
            return(
              <div>
                <Navbar/>
                <h1 style = {title}>Explore the world</h1>
                <Input
                  style = {money1}
                  onChange = {this.money_c1}
                  placeholder='Min Spend'
                />
                <Input
                  style = {money2}
                  onChange = {this.money_c2}
                  placeholder='Max Spend'
                />
                <Input
                  style = {day1}
                  onChange = {this.day_c1}
                  placeholder='Min Day'
                />
                <Input
                  style = {day2}
                  onChange = {this.day_c2}
                  placeholder='Max Day'
                />
                <Button style = {sub} onClick = {this.search}>Search</Button>


                <h1 style = {search}>Choose your place</h1>
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
                </Map>
              </div>
            )
        }
      }
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAJNbOFFGV2FE-yLYI8L-XWK5GG3Gpb-2U"
})(Explore)
