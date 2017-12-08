import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCards } from '../../../actions';

import axios from 'axios'
import NavBar from '../../Navbar/Navbar.jsx'
import ProfileBar from '../Profile_bar.jsx'
import CardFormField from './CardFormField.jsx'
import formFields from './formFields.js'

import styles from './styles.scss'

class CardList extends Component {
  constructor(props){
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  renderCards(){

    return
      this.props.cards.map(card => {
        return (
          <Card>
            <Card.Content>
              <Card.Header>
                {card.city}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                Expense: {card.expense}
                Days: {card.days}
                Description: {card.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        );
      });
  }

    render() {
      return(
        <div>
          {this.renderCards()}
        </div>
      );
    }
  }


  function mapStateToProps({ cards }) {
    return { cards };
  }

  export default connect(mapStateToProps, { fetchCards })(CardList);
