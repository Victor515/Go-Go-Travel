import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'

import styles from './styles.scss'

class Gallerycard extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            username: this.props.username,
            img: this.props.img,
            city: this.props.city
        }
    }



    render() {
            return(
              <Card>
                <Image src= {this.state.img} />
                <Card.Content>
                  <Card.Header>
                    {this.state.city}
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Joined in 2015
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    {this.state.username} is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            )
        }
    }


export default Gallerycard
