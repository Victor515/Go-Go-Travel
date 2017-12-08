import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { ReactAutosuggestGeocoder } from 'react-autosuggest-geocoder'

class NameGeoEncode extends Component {
    constructor(props){
      super(props);
      this.state = {
        name:"",
        longitude:Infinity,
        latitude:Infinity
      }
    }

    render(){
      return (
        <div>
          <ReactAutosuggestGeocoder
            url='https://search.mapzen.com/v1'
            apiKey='mapzen-mZLokn2'
            onSuggestionSelected={(event, { search, suggestion, method }) => {
              this.setState({
                location: suggestion.properties.label,
                latitude: suggestion.geometry.coordinates[1],
                longitude: suggestion.geometry.coordinates[0]
              })
            }} />
        </div>
      )
    }
};

export default reduxForm ({
  form: 'NameGeoEncode'
})(NameGeoEncode);
