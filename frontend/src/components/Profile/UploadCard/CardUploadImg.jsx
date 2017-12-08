import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { reduxForm, Field } from 'redux-form'

const CLOUDINARY_UPLOAD_PRESET = 'travelcard';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ittlepearl/upload';

class CardUploadImg extends Component {
    constructor(props){
      super(props);
      this.uploadedFile = null;
      this.state = {
        uploadedFileCloudinaryUrl:"",
      }
      this.input = this.props.input;
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
            uploadedFileCloudinaryUrl: response.body.secure_url,

          });
          this.input.value = this.state.uploadedFileCloudinaryUrl;
          console.log("original",this.state.uploadedFileCloudinaryUrl);
        }
      });
    }

    render(){
      return (
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ?
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            :
            <div>
              <div id = "invisible">
                <input {...this.input} />
              </div>
              <p>{this.uploadedFile.name}</p>
              <Image src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
        </div>
      )
    }
};

export default reduxForm ({
  form: 'CardUploadImg'
})(CardUploadImg);
