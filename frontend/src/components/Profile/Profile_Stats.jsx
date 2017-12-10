import React, { Component } from 'react'
import { Button, Card, Grid, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar.jsx'
import Profilebar from './Profile_bar.jsx'

import './App.css';
import './style-vis.css';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines,HorizontalGridLines } from 'react-vis';




import styles from './styles.scss'

class ProfileStats extends Component {
  render() {
    const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];
    return (
      <div>
      <div className="App">
        <XYPlot height={300} width= {300}>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <LineSeries data={data} />
</XYPlot>
      </div>
      </div>
    );
  }
}



export default ProfileStats
