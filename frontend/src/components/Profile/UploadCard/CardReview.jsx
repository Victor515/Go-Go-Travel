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
  const reviewFields = _.map(formFields, ({ name, label }) => {
      console.log(formValues);
      return (
        <div key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </div>
      );
  });

      return(
        <div>

          {reviewFields}

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
