import React, {Component} from 'react';

import 'font-awesome/css/font-awesome.min.css';

class Cards extends Component {

  constructor(props) {
    super(props)

    this.state = {
        openStyle: "Card-box",
        icons: {
            1: 'gitlab',
            2: 'github',
            3: 'bitcoin',
            4: 'bitbucket',
            5: 'apple',
            6: 'android',
          }
    }

    this.checkPair = this.checkPair.bind(this);
  }

  checkPair() {
    this.props.callbackChecker(this.props.card);
  }

  render() {
    let cardStyle = "Card-container"
    let boxStyle = "Card-box"
    let icon = "fa fa-question";
    let iconText = this.state.icons[parseInt(this.props.card)]

    if (this.props.solved.includes(this.props.card)) {
        cardStyle = "Card-container Card-opened"
        boxStyle = "Card-box Card-box-opened"
        icon = "fa fa-" + iconText
    }

    if (this.props.current == this.props.card) {
        boxStyle = "Card-box Card-box-opened"
        icon = "fa fa-" + iconText
    }


    return(
      <div className={cardStyle} onClick={this.checkPair}>
        
        <div className={boxStyle}>
            <i className={icon} aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default Cards;
