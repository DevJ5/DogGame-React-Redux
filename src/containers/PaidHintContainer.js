import React, {Component} from 'react';
import PaidHint from "../components/PaidHint";
import { connect } from "react-redux";
import { disableWrongButtons, payFiftyCoins } from "../actions/PaidHintActions";
import capitalize from "../helpers/capitalize";

class PaidHintContainer extends Component {

  payFiftyCoins() {
    this.props.dispatch(payFiftyCoins())
  }

  disableWrongButtons() {
    this.props.dispatch(disableWrongButtons(capitalize(this.props.correctBreedObj.name), this.props.answers))
  }

  handleClick = () => {
    if (this.props.balance >= 50) {
      this.payFiftyCoins();
      this.disableWrongButtons();
    } else {
      /** SHOW THE PAY THING */
    }
  };

  render() {
    return <PaidHint onClick={this.handleClick}/>
  }
}

const mapStateToProps = ({ balance, correctBreedObj, answers }) => ({ balance, correctBreedObj, answers });

export default connect(mapStateToProps)(PaidHintContainer)