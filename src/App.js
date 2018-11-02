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
    return (
      <div className="quote-container">
        <div id="text" dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
        <div id="author">{this.props.author}</div>
      </div>
    )
  }
}

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <button id="new-quote" onClick={props.getQuote}>Next</button>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.plainText}%20-%20${props.author}`} target="_blank" rel="noopener noreferrer">Tweet</a>
    </div>
  )
}

class App extends Component {
  state = {
    text: "",
    author: "",
    plainText: ""
  }

  getQuote = () => {
    const url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"; //&callback=";

    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        text: data[0].content,
        author: data[0].title
      })
    })
    .then(() => {
      this.setState({
        plainText: document.getElementById("text").innerText
      })
    })
    .catch(error => console.log(error))
  }

  componentWillMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <Header />
          <Quote text={this.state.text} author={this.state.author} />
          <Buttons getQuote={this.getQuote} plainText={this.state.plainText} author={this.state.author} />
        </div>
      </div>
    );
  }
}

export default App;