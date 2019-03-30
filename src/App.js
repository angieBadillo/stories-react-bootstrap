import React, { Component } from 'react';
import './App.css';
import StickyNavbar from './Navbar';
import MainContent from './MainContent';
import StoryHome from './StoryHome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <StickyNavbar/>
        <Route path="/" exact component={MainContent} />
        <Route path="/stories/" component={StoryHome} />
      </div>
      </Router>
    );
  }
}

export default App;
