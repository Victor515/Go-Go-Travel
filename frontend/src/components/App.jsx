import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Button, Segment, Label, Menu, activeItem, Input} from 'semantic-ui-react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from './Home/Home.jsx';
import NavBar from './Navbar/Navbar.jsx'
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Profile from './Profile/Profile.jsx';
import Profile_Following from './Profile/Following.jsx';
import Profile_Follower from './Profile/Follower.jsx';
import Profilestats from './Profile/Profile_Stats.jsx';
import Explore from './Explore/Explore.jsx';
import DetailList from './DetailList/DetailList.jsx';
import CardNew from './Profile/UploadCard/CardNew.jsx';

import styles from '../styles/main.scss';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
        <div>
            <BrowserRouter>
              <div>
                <NavBar />
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/profile/following" component={Profile_Following}/>
                <Route exact path="/profile/follower" component={Profile_Follower}/>
                <Route exact path="/profile/statistics" component={Profilestats}/>
                <Route exact path="/profile/uploadcard" component={CardNew}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/detail" component={DetailList}/>
              </div>
            </BrowserRouter>
          </div>
      );
    }
}

//important notes:
//connect : hook the current component to the redux store
//make the current component aware of the global state
export default connect(null, actions)(App);
