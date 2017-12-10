import React, { Component } from 'react'
import {Input } from 'semantic-ui-react'
export default ({input, label}) => {
    return(
      <div>
        <label>{label}</label>
        <Input {...input}/>
      </div>
    );
};
