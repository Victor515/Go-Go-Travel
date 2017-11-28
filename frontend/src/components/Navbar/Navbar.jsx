import React, { Component } from 'react'
import { Button, Segment, Label, Menu, activeItem, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './styles.scss'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.logout = this.logout.bind(this);
    }

    logout(){
      axios.get('/api/logout', (res) => {
        console.log('Logged out');
      })
    }

    render() {

        if (!this.props.isLoggedIn) {
            return(

                <Menu fixed='top' size='massive'>
                  <Link to = {'/'}>
                    <Menu.Item name="GoGoTravel" active={activeItem === "GoGoTravel"}/>
                  </Link>
                    <Menu.Menu position='right'>
                      <Link to = {
                          {
                            pathname : '/explore',
                            state: {isLoggedIn : false}
                          }
                        }>
                        <Menu.Item name = 'Explore' active={activeItem === 'Explore'} />
                      </Link>
                        <Link to = {'/login'}>
                          <Menu.Item name = 'Login' active={activeItem === 'Login'} />
                        </Link>
                        <Link to = {'/register'}>
                          <Menu.Item name = 'Register' active={activeItem === 'Register'} />
                        </Link>
                    </Menu.Menu>
                  </Menu>
            )
        } else {
            return(
              <Menu fixed='top' size='massive'>
                <Link to = {
                    {
                      pathname: '/',
                      state: {isLoggedIn:this.state.isLoggedIn}
                    }
                  }>
                  <Menu.Item name="GoGoTravel" active={activeItem === "GoGoTravel"}/>
                </Link>
                  <Menu.Menu position='right'>
                    <Link to = {
                        {
                          pathname : '/explore',
                          state: {isLoggedIn : true}
                        }
                      }>
                      <Menu.Item name = 'Explore' active={activeItem === 'Explore'} />
                    </Link>
                      <Link to = {'/profile'}>
                        <Menu.Item name = 'Profile' active={activeItem === 'Profile'} />
                      </Link>

                      <Link to = {'/'} onClick = {this.logout}>
                        <Menu.Item name = 'Logout' active={activeItem === 'Logout'} />
                      </Link>
                  </Menu.Menu>
                </Menu>



            )
        }
    }
}

export default Navbar
