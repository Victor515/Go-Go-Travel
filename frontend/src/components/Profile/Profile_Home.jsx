import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header, Popup, Modal,Segment,List,Divider, Container} from 'semantic-ui-react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchUser, fetchCards} from '../../actions';

import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'
import Profilebar from './Profile_bar.jsx'
import Gallerycard from './Gallerycard.jsx'
import CardList from './UploadCard/CardList.jsx'
import CardNew from './UploadCard/CardNew.jsx'
import ProfileFollowing from './Following.jsx'
import ProfileFollower from './Follower.jsx'
import ProfileSettings from './Profile_Settings.jsx'
import scriptLoader from 'react-async-script-loader'
import FavoriteList from './FavoriteList/FavoriteList.jsx'


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
                  <BrowserRouter>
                    <div className = "profile">
                      <Profilebar/>
                      <Route exact path="/profile" component={CardList}/>
                      <Route exact path="/profile/favorite" component={FavoriteList}/>
                      <Route exact path="/profile/settings" component={ProfileSettings}/>
                      <Route exact path="/profile/uploadcard" component={CardNew}/>
                    </div>
                  </BrowserRouter>

                  <Divider hidden/>
                  <Divider hidden/>
                  <Segment
                        inverted
                        vertical
                      >
                        <Container textAlign='center'>
                          <Grid style={{ margin: '0em 0em 0em', padding: '0em 0em' }} divided inverted stackable>
                            <Grid.Row>
                              <Grid.Column width={4}>
                                <Header inverted as='h4' content='Member' />
                                <List link inverted>
                                  <List.Item as='a'>Keye Zhang</List.Item>
                                  <List.Item as='a'>Cheng Ding</List.Item>
                                  <List.Item as='a'>Yubo Ouyang</List.Item>
                                  <List.Item as='a'>Qishan Zhu</List.Item>
                                  <List.Item as='a'>Yan Xu</List.Item>

                                </List>
                              </Grid.Column>
                              <Grid.Column width={4}>
                                <Header inverted as='h4' content='Contact us' />
                                <List link inverted>
                                  <List.Item as='a' href="mailto:keyez2@illinois.edu">keyez2@illinois.edu</List.Item>
                                  <List.Item as='a' href="mailto:chengd2@illinois.edu">chengd2@illinois.edu</List.Item>
                                  <List.Item as='a' href="mailto:yuboo2@illinois.edu">yuboo2@illinois.edu</List.Item>
                                  <List.Item as='a' href="mailto:qishanz2@illinois.edu">qishanz2@illinois.edu</List.Item>
                                  <List.Item as='a' href="mailto:yanxu3@illinois.edu">yanxu3@illinois.edu</List.Item>

                                </List>
                              </Grid.Column>

                              <Grid.Column width={7}>
                                <Header inverted as='h4' content='About' />
                                <p>This is a group project of a course The Art of Web Programming in UIUC. This app aims to provide a platform which can record users travel stories for wherever they go, and it can also help with travel destination recommendation based on user profile and flight price.</p>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>

                          <Divider inverted fitted section />
                          <p style={{ margin: '0em 0em 0em', padding: '0em 0em' }} align="center">©2017 Go Go Travel</p>

                        </Container>
                      </Segment>
                </div>
            );
        } else {
            return(
                <div className="Dashboard">
                  <Card>
                      <h1>"You must log in before you can see this page".</h1>
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


const wrapper = scriptLoader(
    [
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJNbOFFGV2FE-yLYI8L-XWK5GG3Gpb-2U&libraries=places"
    ]
)(Profile)


export default connect(mapStateToProps, {fetchUser, fetchCards})(wrapper);
