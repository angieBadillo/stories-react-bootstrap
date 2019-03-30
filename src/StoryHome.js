import React, { Component } from 'react';
import './App.css';
import StoryCardGroup from './StoryCardGroup';
import Container from 'react-bootstrap/Container';

const data = [
    {
      "id":1,
      title : "Latest",
      stories: [
        {
          "id":1,
          "title": "Reactjs",
          "description": "A JavaScript library for building user interfaces",
        },
        {
          "id":2,
          "title": "Vuejs",
          "description": "The Progressive JavaScript Framework",
        },
        {
          "id":3,
          "title": "Emberjs",
          "description": "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern"
        }
      ]
    },
    {
      "id":2,
      title : "Editors Picks",
      stories: [
        {
          "id":1,
          "title": "Reactjs",
          "description": "A JavaScript library for building user interfaces",
        },
        {
          "id":2,
          "title": "Vuejs",
          "description": "The Progressive JavaScript Framework",
        },
        {
          "id":3,
          "title": "Emberjs",
          "description": "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern"
        }
      ]
    }
  ];


class StoryHome extends Component {
    render() {
      return (
        <div>
         <Container fluid className="story-home-hero">
            <h1>Stories</h1>
         </Container>
         {data.map(dataItem => <StoryCardGroup key={dataItem.id} title={dataItem.title} stories={dataItem.stories}/>)}
        </div>
      );
    }
  }
  
  export default StoryHome;