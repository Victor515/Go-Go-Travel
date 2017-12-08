import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header, Popup, Modal} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchUser, fetchCards} from '../../actions';

import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'
import Profilebar from './Profile_bar.jsx'
import Gallerycard from './Gallerycard.jsx'
import CardList from './UploadCard/CardList.jsx'

import styles from './styles.scss'

class Profile extends Component {

    constructor(props) {
        super(props);
        console.log("ssssss");
        console.log(this.props);
        this.state = {
            username: ""
        }
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
      this.props.fetchUser();
    }

    logOut() {
        axios.get('/api/logout').then( (res) => {
            console.log("Logged out");
        })
    }



    render() {

        if (this.props.auth) {
            return(
                <div>
                  <Profilebar/>
                  <CardList />

                    <Link to = '/profile/uploadcard'>
                    <Button className = 'post-button' floated = 'right' circular icon='plus' color = 'teal' size = 'huge' />
                    </Link>
                </div>
            )
        } else {
            return(
                <div className="Dashboard">
                  <Card>
                      <h1>You must log in before you can see this page.</h1>
                      <Link to="/">
                          Back
                      </Link>
                  </Card>
                </div>
            )
        }
    }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, {fetchUser, fetchCards})(Profile);
