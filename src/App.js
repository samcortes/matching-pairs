import React, {Component} from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

import Cards from './components/Cards';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.shuffle(['1a', '1b', '2a', '2b', '3a', '3b', '4a', '4b', '5a', '5b', '6a', '6b']),
      opened: null,
      solved: [],
      win: false,
    }

    this.shuffle = this.shuffle.bind(this);
  }


  callbackChecker = (pair) => {

    if (pair == this.state.opened) {
      return
    }

    this.setState(prevState => {
      let newValue = pair
      let solved = prevState.solved
      if (parseInt(pair) == parseInt(prevState.opened)) {
        newValue = null
        solved.push(pair)
        solved.push(prevState.opened)
      }

      var didWin = false;
      if (this.state.cards.length == solved.length) {
        didWin = true;
      }

      return{
        opened: newValue,
        solved: solved,
        win: true,
      }
    })
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  render() {
    const cards = this.state.cards.map(card =>  <Cards callbackChecker={this.callbackChecker} card={card} current={this.state.opened} solved={this.state.solved} />)
    return(
      <div className="App-container">
        <div className="Apps-wrapper">
          <div className="App-header">
            <div>
            <span className="thin">Matching</span>
              <span className="thick">Pairs</span>
            </div>
            <a href="https://www.samcortes.com" className="nav-more">
              more from sam&nbsp;
              <i className="fa fa-angle-right"></i>
            </a>
          </div>

          <div className="Cards-container">
            {cards}
          </div>
          <div className="Cards-win">Wohoo!</div>
        </div>
        <p className="App-copyright">Copyright © 2019 samcortes. All rights reserved.</p>
      </div>
    )
  }
}

export default App;
