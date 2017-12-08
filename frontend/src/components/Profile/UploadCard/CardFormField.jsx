import React, { Component } from 'react'

export default ({input, label}) => {
    return(
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
};
