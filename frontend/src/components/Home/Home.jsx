import React, { Component } from 'react'
import { Button, Card, Menu, activeItem, Container, Image, Header, Segment, Grid, List, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import { Zoom , Slide} from 'react-slideshow-image'


import styles from './styles.scss'
const images = [
  'https://farm5.staticflickr.com/4516/38657079716_51bc3ae8ef_o_d.jpg',
  'https://farm5.staticflickr.com/4516/38657079716_51bc3ae8ef_o_d.jpg',
  'https://farm5.staticflickr.com/4516/38657079716_51bc3ae8ef_o_d.jpg',
  'https://farm5.staticflickr.com/4516/38657079716_51bc3ae8ef_o_d.jpg',
  'https://farm5.staticflickr.com/4516/38657079716_51bc3ae8ef_o_d.jpg'
];

class Home extends Component {
    render() {

        return(



            <div>

            <Container text textAlign='center' style={{ marginTop: '-2em', marginBottom: '4em'}}>
              <div className="font">
                <Header as='h1' style={{ fontSize: '2em' }}>EXPLORE WONDERLAND</Header>
              </div>
            </Container>


            <div className = "slide">
            <Slide
                images={images}
                duration="2000"
                transitionDuration="1000"
              />
              </div>

            <Segment raised style={{ padding: '0em' }} vertical>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Grid.Column>
                  </Grid.Column>

                </Grid.Row>
              </Grid>
            </Segment>
            <Segment raised style={{ padding: '0em' }} vertical>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '1.8em' }}>"enter title 1..."</Header>
                    <p style={{ fontSize: '1.2em' }}>That is what they all say about us</p>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '1.8em' }}>"enter title 2..."</Header>
                    <p style={{ fontSize: '1.2em' }}>
                      Chief Fun Officer Acme Toys
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Container>

            <Grid columns={3} relaxed style={{ paddingBottom: '5em', paddingTop: '5em', marginLeft:'5em', marginRight:'5em' }}>
              <Grid.Column>
                <Segment textAlign='center' basic>
                <Icon color='grey' size='big' name='browser' />
                  <Header as='h3' style={{ fontSize: '1.8em'}}>TITLE</Header>
                  <p style={{ fontSize: '1.2em' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment textAlign='center' basic>
                <Icon color='grey' size='big' name='tags' />
                  <Header as='h3' style={{ fontSize: '1.8em'}}>TITLE</Header>
                  <p style={{ fontSize: '1.2em' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment textAlign='center' basic>
                <Icon color='grey' size='big' name='tasks' />
                  <Header as='h3' style={{ fontSize: '1.8em'}}>TITLE</Header>
                  <p style={{ fontSize: '1.2em' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </Segment>
              </Grid.Column>

            </Grid>
            </Container>

            <Segment
                  inverted
                  vertical
                >
                  <Container textAlign='center'>
                    <Grid style={{ margin: '0em 0em 0em', padding: '0em 0em' }} divided inverted stackable>
                      <Grid.Row>
                        <Grid.Column width={4}>
                          <Header inverted as='h4' content='Member' />
                          <List link inverted>
                            <List.Item as='a'>Keye Zhang</List.Item>
                            <List.Item as='a'>Cheng Ding</List.Item>
                            <List.Item as='a'>Yubo Ouyang</List.Item>
                            <List.Item as='a'>Qishan Zhu</List.Item>
                            <List.Item as='a'>Yan Xu</List.Item>

                          </List>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Header inverted as='h4' content='Contact us' />
                          <List link inverted>
                            <List.Item as='a' href="mailto:keyez2@illinois.edu">keyez2@illinois.edu</List.Item>
                            <List.Item as='a' href="mailto:chengd2@illinois.edu">chengd2@illinois.edu</List.Item>
                            <List.Item as='a' href="mailto:yuboo2@illinois.edu">yuboo2@illinois.edu</List.Item>
                            <List.Item as='a' href="mailto:qishanz2@illinois.edu">qishanz2@illinois.edu</List.Item>
                            <List.Item as='a' href="mailto:yanxu3@illinois.edu">yanxu3@illinois.edu</List.Item>

                          </List>
                        </Grid.Column>

                        <Grid.Column width={7}>
                          <Header inverted as='h4' content='About' />
                          <p>This is a group project of a course The Art of Web Programming in UIUC. This app aims to provide a platform which can record users travel stories for wherever they go, and it can also help with travel destination recommendation based on user profile and flight price.</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

                    <Divider inverted fitted section />
                    <p style={{ margin: '0em 0em 0em', padding: '0em 0em' }} align="center">©2017 Go Go Travel</p>

                  </Container>
                </Segment>
            </div>
        )
    }
}

export default Home
