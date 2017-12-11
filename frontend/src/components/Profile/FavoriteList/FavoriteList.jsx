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
      console.log(3333);
      console.log(card);
        return(
          <Card floated='right' key = {card._id}>
            <Image size='medium' centered src = {card.picture}/>
            <Card.Content>
              <Card.Header>
                {card.card_name}
              </Card.Header>
              <Card.Meta>
                <span><Icon name='dollar' color='yellow' circular/>{card.money}  <Icon name='travel' color='blue' circular/> {card.day} days</span>
              </Card.Meta>
              <Card.Description>
                {card.post_txt} <br />
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
            <span>
              <Icon name='point' />
              {card.city_name}
              <button style={{color: 'red',backgroundColor: 'Transparent',border: 'none', float:'right'}}  onClick = {() =>  {this.cancelFavorite(card._id, this.props.history)}} content='Unlike'>
                <i class="fa fa-remove"></i>
                  Unlike
              </button>
            </span>
            </Card.Content>
          </Card>

        );
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
