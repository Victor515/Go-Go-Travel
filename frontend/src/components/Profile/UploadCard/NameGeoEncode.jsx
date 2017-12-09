import React, { Component } from 'react'

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { reduxForm, Field } from 'redux-form'

class NameGeoEncode extends Component {
    constructor(props){
      super(props);
      this.state = {
        address : "",
        lat : "",
        lng : ""
      }
      this.onChange = (address) => this.setState({ address })
      this.res = ""
    }

    handleSelect(address, placeId) {
      console.log(address);
      this.res += "You have been to :" + address;
      console.log(this.res);
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then((latLng) => {
          console.log('Success', latLng)
          this.setState({lat : latLng.lat})
          this.setState({lng : latLng.lng})
          this.res += "! latitude:";
          this.res += this.state.lat.toString();
          this.res += ", longitude:";
          this.res += this.state.lat.toString();
          console.log(this.state.lat);
          console.log(this.state.lng);
          console.log(this.res);
        })
        .catch(error => console.error('Error', error))
    }

    handleFormSubmit(event) {
      event.preventDefault()

      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then((latLng) => {
          console.log('Success', latLng)
        })
        .catch(error => console.error('Error', error))
    }

    render(){
      const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      }
      const options = {
        googleLogo:false
      }
      return (
        <div>
        {this.state.lat === '' ?
          <PlacesAutocomplete inputProps = {inputProps} onSelect={this.handleSelect.bind(this)}/>
          :
          <div>

              <input {...this.state.lat} value = {this.state.lat}/>
          </div>}
        </div>
      )
    }
};

export default reduxForm ({
  form: 'NameGeoEncode'
})(NameGeoEncode);
