import React, { Component } from 'react'
import { Button, Card, Image, Dropdown, Input, Item, Grid, Rating, Icon, Feed} from 'semantic-ui-react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import styles from './styles.scss'

class ExploreCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isfav: false
    }
    this.flipIfFavorite = this.flipIfFavorite.bind(this);
  }

  componentDidMount(){
    axios.post('/api/checkiffavorite', this.props.cardinfo._id).then((res) => {
      this.setState({isfav: res.data});
    });
  }

  flipIfFavorite(value){
    if(this.state.isfav){
      axios.post('/api/cancelcardfavorite', value).then((res) => {
          this.setState({isfav: res.data});
      });
    }
    else{
      axios.post('/api/addcardfavorite', value).then((res) => {
          this.setState({isfav: res.data});
      });
    }

    this.props.onClickChange();
  }


  render(){
    console.log(this.props);
    if(this.props.cardinfo == undefined){
      return (<div></div>);
    }
    if(!this.props.isListCard){
        return(
          <Card color='teal' key = {this.props.cardinfo.card_name}>
            <Image src={this.props.cardinfo.picture} />
            <Card.Content>
              <Image floated='right' size='small' src={this.props.cardinfo.user_head_photo} circular avatar/>
              <Card.Header>
                {this.props.cardinfo.card_name}
              </Card.Header>
              <Card.Meta>
                {this.props.cardinfo.username}
              </Card.Meta>
              <Card.Description>
                <Icon name='dollar' />{this.props.cardinfo.money}&nbsp;USD
              </Card.Description>
              <Card.Description>
                <Icon name='calendar' />{this.props.cardinfo.day}&nbsp;Days
              </Card.Description>
              <Card.Description>
                { this.props.isListCard && this.props.cardinfo.post_txt }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button toggle active={this.state.isfav} icon='heart' onClick = {() => this.flipIfFavorite(this.props.cardinfo._id)}/>
                <a className = "more" onClick = {this.props.getmore}>Get More</a>
            </Card.Content>
          </Card>
      );
  } else {
      return(
        <Card color='teal' key = {this.props.cardinfo.card_name}>
          <Image src={this.props.cardinfo.picture} />
          <Card.Content>
            <Image floated='right' size='small' src={this.props.cardinfo.user_head_photo} circular avatar/>
            <Card.Header>
              {this.props.cardinfo.card_name}
            </Card.Header>
            <Card.Meta>
              {this.props.cardinfo.username}
            </Card.Meta>
            <Card.Description>
              <Icon name='dollar' />{this.props.cardinfo.money}&nbsp;USD
            </Card.Description>
            <Card.Description>
              <Icon name='calendar' />{this.props.cardinfo.day}&nbsp;Days
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Button toggle active={this.state.isfav} icon='heart' onClick = {() => this.flipIfFavorite(this.props.cardinfo._id)}/>
          </Card.Content>
        </Card>
    );
  }
}
}



export default ExploreCard
