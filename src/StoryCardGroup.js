import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import StoryCard from './StoryCard';
import './Main.css';


class StoryCardGroup extends Component {
  constructor(props, context) {
        super(props, context);
        this.state = { };
    }
    render() {
        return (
          <Container className="mb-5 mt-5">
            <h3>{this.props.title}</h3>
            <CardDeck>
              {this.props.stories.map(story => <StoryCard key={story.id} title={story.title} description={story.description} imgUrl={story.imgUrl}/>)}
            </CardDeck>
          </Container>
    )}
}

export default StoryCardGroup;