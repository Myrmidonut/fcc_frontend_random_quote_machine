import React, { Component } from 'react';
import './App.css';

/*
"https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

response:
  text: [0].content
  author: [0].title

`https://twitter.com/intent/tweet?text=${encdeURIComponent(textToTweet)}`
*/

const Header = () => {
  return (
    <div className="header">
      A new quote for today!
    </div>
  )
}

class Quote extends Component {
  render() {
    const url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          text: data[0].content,
          author: data[0].title
        })
        
        console.log(data[0])
      })
      .catch(error => {
        console.log(error);
      });

    return (
      <div className="quote-container">
        <div id="text">{this.props.text}</div>
        <div id="author">{this.props.author}</div>
      </div>
    )
  }
}

const Buttons = () => {
  return (
    <div className="buttons-container">
      <button id="new-quote">Next</button>
      <a id="tweet-quote" href="">Tweet</a>
    </div>
  )
}

class App extends Component {
  state = {
    text: "aaa",
    author: "bbb"
  }
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <Header />
          <Quote text={this.state.text} author={this.state.author} />
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
      </div>
    );
  }
}

export default App;