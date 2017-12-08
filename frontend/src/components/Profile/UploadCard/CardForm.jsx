import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Divider, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import axios from 'axios'
import NavBar from '../../Navbar/Navbar.jsx'
import ProfileBar from '../Profile_bar.jsx'
import CardFormField from './CardFormField.jsx'
import formFields from './formFields.js'
import Dropzone from 'react-dropzone';
import request from 'superagent';

import styles from './styles.scss'

const CLOUDINARY_UPLOAD_PRESET = 'travelcard';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ittlepearl/upload';

class CardForm extends Component {
  constructor(){
    super();
    this.renderField = this.renderField.bind(this);
    this.uploadedFile = null;
    this.state = {
      uploadedFileCloudinaryUrl:""
    }
  }

  onImageDrop(files) {
    console.log("yeah");
    this.uploadedFile = files[0];
    this.handleImageUpload();
  }

  handleImageUpload() {
    console.log("handle Upload");
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', this.uploadedFile);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        console.log(this.state.uploadedFileCloudinaryUrl);
      }
    });
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
            {this.renderField()}
            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
              :
              <div>
                <p>{this.uploadedFile.name}</p>
                <Image src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>

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
