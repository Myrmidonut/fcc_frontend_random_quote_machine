import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        A new quote for today!
      </div>
    )
  }
}

class Quote extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button>Next</button>
        <button>Tweet</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Quote />
        <Buttons />

        {/*
        App container
          header
          quote
            text
            author
          buttons
            next
            tweet
        */}

      </div>
    );
  }
}

export default App;