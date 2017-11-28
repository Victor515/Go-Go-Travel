import React, { Component } from 'react'
import { Button, Input, Card, Form, Grid, Header, Image, Message, Segment, Icon, Divider, activeItem  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter, Redirect } from 'react-router'
import Navbar from '../Navbar/Navbar.jsx';

import styles from './styles.scss'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                password: '',
                email: ''
            },
            redirect: false,
            message: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        // const redirect = encodeURIComponent(this.state.user.redirect);
        // const formData = `email=${email}&password=${password}&redirect=${redirect}`;
        const formData = `email=${email}&password=${password}`;

        // create an AJAX request (This should probably done with Axios instead)
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                this.setState({
                    message: 'Successfully logged in!',
                    redirect: true
                })
            } else {
                this.setState({
                    message: 'Unable to log in'
                })
            }
        });
        xhr.send(formData);
    }

    onChangeEmail(e) {
        const user = this.state.user;
        user.email = e.target.value;
        this.setState({
            user
        })
    }

    onChangePassword(e) {
        const user = this.state.user;
        user.password = e.target.value;
        this.setState({
            user
        })
    }

    render() {
      if(this.state.redirect){
        return (
          <Redirect to={'/profile'}/>
        )
      }
      else{
        return(
          <div>
            <Navbar isLoggedIn = {false} />
                <div className='Login'>
                  <Grid className = 'Login__container' textAlign = 'center'  verticalAlign = 'middle'>
                    <Grid.Column className = 'Login__content'>
                      <Header as='h2' textAlign='center' className = 'header' color = 'black'>
                        <Icon name = 'sign in'/>
                        Login in to your account
                      </Header>
                      <Form size='large'>
                        <Segment stacked>
                          <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            onChange={this.onChangeEmail}
                            />
                          <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password(6 or more characters)'
                            type='password'
                            onChange={this.onChangePassword}
                            />
                          <Button color = 'black' fluid size='large' onClick = {this.onSubmit}>Sign In</Button>
                          <Divider horizontal>or</Divider>
                          <Button color = 'facebook' fluid size='large'>Continue With Facebook</Button>
                          <br/>
                          <p className = 'Login__message'>{this.state.message}</p>
                          </Segment>
                      </Form>
                      <Message>
                        Not a member? <Link to="/register">Join now</Link>
                    </Message>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
    )
  }
}
}

export default Login
