import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'

import styles from './styles.scss'

class Profilebar extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            username: this.props.username
        }
    }



    render() {
            return(
                <div>

                    <div className="col-lg-14 col-sm-14">

                      <div className="card hovercard">
                        
                        <div className="useravatar">
                          <img alt="" src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAkhAAAAJDFiYjhiOGMxLTY2NWEtNGE1OS1hZGY4LTY1MDIzYjFkNDJiZQ.jpg" />
                        </div>
                        <div className="card-info"> <span className="card-title">{this.state.username}</span></div>
                      </div>

                      <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                          <Link to = {
                              {pathname: "/profile"}
                            }>
                            <button type="button" id="stars" className="btn btn-primary" href="#tab1" data-toggle="tab"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                <div className="hidden-xs">Gallery</div>
                            </button>
                          </Link>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" id="favorites" className="btn btn-default" href="#tab2" data-toggle="tab"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                <div className="hidden-xs">Favorites</div>
                            </button>
                        </div>
                          <div className="btn-group" role="group">
                              <button type="button" id="following" className="btn btn-default" href="#tab3" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                              <div className="hidden-xs">Followers</div>
                              </button>
                          </div>
                          <div className="btn-group" role="group">
                            <Link to = {
                                {pathname: "/profile/following"}
                              }>
                              <button type="button" id="following" className="btn btn-default" href="#tab3" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>

                              <div className="hidden-xs">Following</div>

                              </button>
                              </Link>

                          </div>
                        </div>

                        <div className="well">
                          <div className="tab-content">
                            <div className="tab-pane fade in active" id="tab1">
                              <h3>This is tab 1</h3>
                            </div>
                            <div className="tab-pane fade in" id="tab2">
                              <h3>This is tab 2</h3>
                            </div>
                            <div className="tab-pane fade in" id="tab3">
                              <h3>This is tab 3</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
            )
        }
    }


export default Profilebar
