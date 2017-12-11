import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header, Modal} from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCards, deleteCards } from '../../../actions';

import axios from 'axios'
import NavBar from '../../Navbar/Navbar.jsx'
import ProfileBar from '../Profile_bar.jsx'
import CardFormField from './CardFormField.jsx'
import formFields from './formFields.js'

import styles from './styles.scss'

class CardList extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    }
    this.renderCards = this.renderCards.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  handleOpen(){
    this.setState({ modalOpen: true });
  }

  handleClose(){
     this.setState({ modalOpen: false });
  }

  renderCards(){
    console.log("yyyyy");
    console.log(this.props);
    return this.props.cards.map(card => {
        return (<Grid.Column> <Card key = {card._id}>
        <Image width = '300em' height = '200em' src = {card.picture} />
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

            <Modal
              className = "modal"
              trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              basic
              size='small'
            >
              <Header icon='browser' content='Cookies policy' />
              <Modal.Content>
                <h3>This website uses cookies to ensure the best user experience.</h3>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={this.handleClose} >
                   Got it
                </Button>
              </Modal.Actions>
            </Modal>



            <Button onClick = {() => this.props.deleteCards(card._id, this.props.history)} content='Delete' />
          </Card.Content>
        </Card></Grid.Column>);
      });
  }

    render() {
      return(
        <div className = 'cardlist'>
        <Card.Group>
        <Grid>
            <Grid.Row columns={3}>
            {this.renderCards()}

            </Grid.Row>
          </Grid>

        </Card.Group>

          <Link to = '/profile/uploadcard'>
          <div class="rela-inline button more-images add-button">New story</div>

          </Link>
        </div>
      );
    }
  }


  function mapStateToProps(state) {
    console.log(state);
    return {cards: state.profile};
  }

  export default connect(mapStateToProps, { fetchCards, deleteCards })(CardList);
