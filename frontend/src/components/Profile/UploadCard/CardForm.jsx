import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header,Input } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import axios from 'axios'
import NavBar from '../../Navbar/Navbar.jsx'
import ProfileBar from '../Profile_bar.jsx'
import CardFormField from './CardFormField.jsx'
import formFields from './formFields.js'
import CardUploadImg from './CardUploadImg.jsx'
import NameGeoEncode from './NameGeoEncode.jsx'

import styles from './styles.scss'

class CardForm extends Component {
  constructor(){
    super();
    this.renderField = this.renderField.bind(this);
    this.state = {
      cityName: "",
      latitude: Infinity,
      longitude: Infinity
    }
  }

  renderField(){
    return _.map(formFields, ({label, name}) => {
        return (
          <Field
            key = {name}
            label = {label}
            component = {CardFormField}
            type = "text"
            name = {name}
          />
        );
      });
  }

    render() {
      return(
        <div>

          <form onSubmit = {this.props.handleSubmit(this.props.onCardSubmit)}>
            <Field
              key = "city"
              label = "City Name"
              component = {NameGeoEncode}
              type = 'text'
              name = "city_name"
            />

            {this.renderField()}

            <Field
              key = "img_url"
              label = "Photo"
              component = {CardUploadImg}
              type = 'url'
              name = "picture"
            />

            <Link to = '/profile'>
              <Button>Cancel</Button>
            </Link>

            <button type = "submit">Next</button>

          </form>
        </div>
      )
    }
  }


export default reduxForm ({
  form: 'cardForm'
})(CardForm);
