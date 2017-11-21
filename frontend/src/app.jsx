import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Segment, Label, Menu, activeItem, Input} from 'semantic-ui-react';

import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

import styles from './styles/main.scss';

ReactDom.render(



      <Router>
        <div>
        <Menu inverted size='massive'>
          <Link to = {'/'}>
            <Menu.Item name="GoGoTravel" active={activeItem === "GoGoTravel"}/>
          </Link>
            <Menu.Menu position='right'>
                <Menu.Item name = 'Profile' active={activeItem === 'Profile'} />
                <Link to = {'/login'}>
                  <Menu.Item name = 'Login' active={activeItem === 'Login'} />
                </Link>
                <Link to = {'/register'}>
                  <Menu.Item name = 'Register' active={activeItem === 'Register'} />
                </Link>
            </Menu.Menu>
          </Menu>


          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/dashboard" component={Dashboard}/>
          </Switch>
          </div>
      </Router>,
    document.getElementById('react-app')
);
