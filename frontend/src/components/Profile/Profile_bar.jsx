import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'
import * as actions from '../../actions'

import { connect } from 'react-redux'

import styles from './styles.scss'

class ProfileBar extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }



    render() {
            return(
                <div>




                    <div className="col-lg-14 col-sm-14">

                      <div className="card hovercard">

                        <div className="useravatar">
                          <img alt="" src= {this.props.user.headpicture || "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAkhAAAAJDFiYjhiOGMxLTY2NWEtNGE1OS1hZGY4LTY1MDIzYjFkNDJiZQ.jpg"} />
                        </div>
                        <div className="card-info"> <span className="card-title">{this.props.user.email}</span></div>

                      </div>

                      <Button.Group widths='5' basic>
                        <Button as={Link} to='/profile'>Gallery</Button>
                        <Button as={Link} to='/profile/settings'>Settings</Button>
                        <Button as={Link} to='/profile/follower'>Followers</Button>
                        <Button as={Link} to='/profile/following'>Following</Button>
                      </Button.Group>



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

function mapStateToProps(state){
  return { user : state.auth };
}

export default connect(mapStateToProps, actions)(ProfileBar)
