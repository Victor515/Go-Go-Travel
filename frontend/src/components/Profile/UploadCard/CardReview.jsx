//just before the upload, should present data as a real card

import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import axios from 'axios'
import NavBar from '../../Navbar/Navbar.jsx'
import ProfileBar from '../Profile_bar.jsx'
import formFields from './formFields.js'

import styles from './styles.scss'


const CardReview= ({ onCancel, formValues, submitCard, history }) => {
    const addressList = address.split(",");
    const city_name = addressList[0];

      console.log(formValues);
      return(
        <div>

        <Card>
        <Image width = '300em' height = '200em' src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511813715112&di=4b05fec199301a34de4109cadc3d4c8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F55e736d12f2eb938ba5c17e1df628535e5dd6feb.jpg" />
          <Card.Content>
            <Card.Header>
              {formValues.card_name}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                {city_name}
              </span>
            </Card.Meta>
            <Card.Description>
              Expense: {formValues.money} <br />
              Days: {formValues.day}  <br />
              Description: {formValues.post_txt} <br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>

        <Button onClick={onCancel}>
          Back
        </Button>


        <Button
          onClick={() => submitCard(formValues, history)}
        >
          Post
        </Button>
        </div>

      )


  }


  function mapStateToProps(state) {
    console.log(state);
    //here the formValue collect all the value user put in
    return { formValues: state.form.cardForm.values };
  }

  export default connect(mapStateToProps, actions)(withRouter(CardReview));
