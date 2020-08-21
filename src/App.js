import React from "react";
import "./App.css";

const quoteList = [
  {
    id: 1,
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
  },
  {
    id: 2,
    quote: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  },
  {
    id: 3,
    quote: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
  },
  {
    id: 4,
    quote: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    id: 5,
    quote: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer"
  },
  {
    id: 6,
    quote: "Be the chief but never the lord.",
    author: "Lao Tzu"
  },
  {
    id: 7,
    quote: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
  },
  {
    id: 8,
    quote: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    id: 9,
    quote: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra"
  },
  {
    id: 10,
    quote: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    id: 11,
    quote: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    id: 12,
    quote: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    id: 13,
    quote: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    id: 14,
    quote: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark"
  },
  {
    id: 15,
    quote: "You'll see it when you believe it.",
    author: "Wayne Dyer"
  },
  {
    id: 16,
    quote: "Today is the tomorrow we worried about yesterday.",
    author: "Kyaw Gyi"
  },
  {
    id: 17,
    quote: "It's easier to see the mistakes on someone else's paper.",
    author: "Kyaw Gyi"
  },
  {
    id: 18,
    quote: "Every man dies. Not every man really lives.",
    author: "Kyaw Gyi"
  },
  {
    id: 19,
    quote: "To lead people walk behind them.",
    author: "Lao Tzu"
  },
  {
    id: 1,
    quote: "Having nothing, nothing can he lose.",
    author: "William Shakespeare"
  },
  {
    id: 20,
    quote: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser"
  },
  {
    id: 21,
    quote: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Seik Gaung Chate Pee Khway Thar Ma Yaung Nak",
      author: "Min Aung Hlaing",
      quoteList: []
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state.quoteList,
      quoteList
    });
  }

  handleNewCode = () => {
    console.log("this.state", this.state.quoteList);
    const randomIndex = Math.floor(Math.random() * 22);
    let quoteObj = this.state.quoteList.find(value => {
      return value.id === randomIndex;
    });
    console.log("quoteObj", quoteObj);
    this.setState({
      quote: quoteObj.quote,
      author: quoteObj.author
    });
  };

  render() {
    return (
      <div id="quote-box" className="card quote-box">
        <div className="well">
          <div id="text">
            <h3>{this.state.quote}</h3>
          </div>
          <div id="author">
            <h4>{this.state.author}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              id="new-quote"
              onClick={this.handleNewCode}
              className="btn btn-primary btn-block"
            >
              New Quote
            </button>
          </div>
          <div className="col-md-6">
            <button id="new-quote" className="btn btn-secondary btn-block">
              Tweet Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
