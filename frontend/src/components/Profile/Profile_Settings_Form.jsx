import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import axios from 'axios'
import CardUploadImg from './UploadCard/CardUploadImg.jsx'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import ProfileSettingsFormField from './Profile_Settings_Form_Field.jsx'

import styles from './styles.scss'

class ProfileSettingsForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    // <form onSubmit =  {this.props.handleSubmit}>

    <form onSubmit =  {this.props.handleSubmit}>

      Email:
        <Field
          key = "email"
          label = "email"
          component = {ProfileSettingsFormField}
          type = 'text'
          name = "email"
        />

      Add your personal description:
        <Field
          key = "description"
          label = "description"
          component = {ProfileSettingsFormField}
          type = 'text'
          name = "description"
        />


      Upload your profile picture:
        <Field
          key = "img_url"
          label = "headpicture"
          component = {CardUploadImg}
          type = 'url'
          name = "headpicture"
        />
      <button type = "submit">Update</button>
    </form>
  );
  }
}

export default reduxForm({
  form: 'updateProfileForm'
})(ProfileSettingsForm);
