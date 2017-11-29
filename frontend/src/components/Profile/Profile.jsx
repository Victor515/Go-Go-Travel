import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'
import Profilebar from './Profile_bar.jsx'
import Gallerycard from './Gallerycard.jsx'

import styles from './styles.scss'

class Profile extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            username: "",
            isLoggedIn: false
        }
        // if (this.props.location.state != undefined){
        //   this.setState({isLoggedIn: this.props.location.state.isLoggedIn});
        // }

        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        axios.get('/api/profile').then( (res) => {
            console.log(res);

            this.setState({
                isLoggedIn: true,
                username: res.data.user.email
            })
        }).catch( (err) => {
            this.setState({
                isLoggedIn: false
            })
        })
    }

    logOut() {
        axios.get('/api/logout').then( (res) => {
            console.log("Logged out");
        })
    }

    render() {

        if (this.state.isLoggedIn) {
            return(
                <div>
                  <Navbar isLoggedIn = {true}/>
                  <Profilebar username = {this.state.username} />

                    <Grid container columns={4}>
                      <Grid.Column>
                        <Gallerycard
                          username =  {this.state.username}
                          img = 'http://d279m997dpfwgl.cloudfront.net/wp/2016/02/0223_student-debt-mitigated-abroad.jpg'
                          city = "Chicago"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Gallerycard
                          username = {this.state.username}
                          img ='http://d279m997dpfwgl.cloudfront.net/wp/2016/02/0223_student-debt-mitigated-abroad.jpg'
                          city = "New York"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Gallerycard
                          username = {this.state.username}
                          img = 'http://d279m997dpfwgl.cloudfront.net/wp/2016/02/0223_student-debt-mitigated-abroad.jpg'
                          city = "Beijing"
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Gallerycard
                          username = {this.state.username}
                          img = 'http://d279m997dpfwgl.cloudfront.net/wp/2016/02/0223_student-debt-mitigated-abroad.jpg'
                          city = "Paris"
                        />
                      </Grid.Column>
                    </Grid>
                </div>
            )
        } else {
            return(
                <div className="Dashboard">
                  <Navbar isLoggedIn = {false}/>
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

export default Profile
