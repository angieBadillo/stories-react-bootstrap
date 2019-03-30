import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './StoryCard.css';

class StoryCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { };
    }
    render() {
        let image;
        if(this.props.imgUrl) {
           image = <Card.Img variant="top" className="story-card__image" src={this.props.imgUrl} />
        } else {
           image = <div className="story-card__image"></div>
        }
        return (
            <Card className="story-card">
              {image}
              <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                    {this.props.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
    )}
}

export default StoryCard;