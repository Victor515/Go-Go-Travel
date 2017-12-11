import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header, Menu } from 'semantic-ui-react'
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

                      <div class="card-background">
                        <img class="card-bkimg" alt="" src= {this.props.user.headpicture || "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAkhAAAAJDFiYjhiOGMxLTY2NWEtNGE1OS1hZGY4LTY1MDIzYjFkNDJiZQ.jpg"} />

                    </div>
                        <div className="useravatar">
                          <img alt="" src= {this.props.user.headpicture || "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAkhAAAAJDFiYjhiOGMxLTY2NWEtNGE1OS1hZGY4LTY1MDIzYjFkNDJiZQ.jpg"} />
                        </div>
                        <div className="card-info">
                          {this.props.user.email}<br />
                          <Button as={Link} to='/profile/settings'>Settings</Button>
                        </div>


                      </div>

                      <Menu centered pointing size='massive' secondary>
                                <Menu.Item name='Posts' as={Link} to='/profile' />
                                <Menu.Item name='Favorites' />

                              </Menu>

                        </div>
                  </div>
            )
        }
    }

function mapStateToProps(state){
  return { user : state.auth };
}

export default connect(mapStateToProps, actions)(ProfileBar)
