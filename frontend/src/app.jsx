import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Segment, Label, Menu, activeItem, Input} from 'semantic-ui-react';

import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Profile from './components/Profile/Profile.jsx';
import Profile_Following from './components/Profile/Following.jsx';
import Explore from './components/Explore/Explore.jsx';
import DetailList from './components/DetailList/DetailList.jsx';


import styles from './styles/main.scss';

  ReactDom.render(

        <Router>
          <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/profile/following" component={Profile_Following}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/detail" component={DetailList}/>
            </Switch>
            </div>
        </Router>,
      document.getElementById('react-app')
  );
