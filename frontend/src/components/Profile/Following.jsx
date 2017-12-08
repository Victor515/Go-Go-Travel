import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'
import Profilebar from './Profile_bar.jsx'

import styles from './styles.scss'

class Following extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            username: "",
            isLoggedIn: (this.props.location.state == undefined) ? false : true
        }

        // const UserItems = props.videos.map((video) => {
        //   return (
        //     <GalleryListItem
        //       videos = {props.videos}
        //       onVideoSelect = {props.onVideoSelect}
        //       key = {video.id}
        //       video = {video} />
        //   );
        // });
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
                
                  <Profilebar username = {this.state.username} isLoggedIn = {true}/>


                    <Grid columns={4} className = "follower-grid">
                        <Grid.Row>
                          <Grid.Column>
                                  <Card>
                                <Image src='/assets/images/avatar/large/matthew.png' />
                                <Card.Content>
                                <Card.Header>
                                Thommas
                                </Card.Header>
                                <Card.Meta>
                                <span className='date'>
                                Joined in 2017
                                </span>
                                </Card.Meta>
                                <Card.Description>
                                Thomas is a student living in Chicago.
                                </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                <Icon name='user' />
                                15 Friends
                                </a>
                                </Card.Content>
                                </Card>
                          </Grid.Column>
                          <Grid.Column>
                                  <Card>
                                <Image src='/assets/images/avatar/large/matthew.png' />
                                <Card.Content>
                                <Card.Header>
                                Thommas
                                </Card.Header>
                                <Card.Meta>
                                <span className='date'>
                                Joined in 2017
                                </span>
                                </Card.Meta>
                                <Card.Description>
                                Thomas is a student living in Chicago.
                                </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                <Icon name='user' />
                                15 Friends
                                </a>
                                </Card.Content>
                                </Card>
                          </Grid.Column>

                        </Grid.Row>

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

export default Following
