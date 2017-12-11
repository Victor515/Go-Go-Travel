import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header, Modal} from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import { Link,withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchFavoriteCards, cancelFavorite} from '../../../actions';

import axios from 'axios'
import NavBar from '../../Navbar/Navbar.jsx'
import ProfileBar from '../Profile_bar.jsx'

import styles from './styles.scss'

class FavoriteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
      axios.get('/api/favoritecards').then((res) => {
        this.setState({cards: res.data});
      });
  }

  cancelFavorite(value, history){
      axios.post('/api/cancelcardfavorite', value).then((res) => {
        axios.get('/api/favoritecards').then((res) => {
          this.setState({cards: res.data});
        });
      });
  }


  renderCards(){
    return this.state.cards.map(card => {
        return <Card key = {card._id}>
        <Image src = {card.picture} />
          <Card.Content>
            <Card.Header>
              {card.city_name}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Expense: {card.money} <br />
              Days: {card.day}  <br />
              Description: {card.post_txt} <br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
          <Card.Content extra>

            <Button onClick = {() => {this.cancelFavorite(card._id, this.props.history)}} content='Unlike' />
          </Card.Content>
        </Card>;
      });
  }

    render() {
      return(
        <div className = 'cardlist'>
          {this.renderCards()}

        </div>
      );
    }
  }



  export default withRouter(FavoriteList);
