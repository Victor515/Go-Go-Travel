import React, { Component } from 'react'
import { Button, Card, Menu, activeItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'

import styles from './styles.scss'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
  }

    render() {
        return(
            <div>
              <Navbar isLoggedIn = {this.state.isLoggedIn}/>

                <Card>
                    <h1>Welcome to MP2!</h1>

                    <span>
                      <Link to={
                          {
                            pathname: "/login",
                            state: {isLoggedIn: this.state.isLoggedIn}
                          }
                        }>
                            <Button>
                                Login
                            </Button>
                        </Link>

                        <Link to={
                            {
                              pathname: "/register",
                              state: {isLoggedIn: this.state.isLoggedIn}
                            }
                          }>
                            <Button>
                                Register
                            </Button>
                        </Link>
                    </span>

                    <br />
                </Card>
            </div>
        )
    }
}

export default Home
