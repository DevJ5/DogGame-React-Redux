import React, {Component} from 'react'
import { connect } from "react-redux";
import FreeHint from "../components/FreeHint";

class FreeHintContainer extends Component {

  isDisabled() {
    return this.props.shownBreeds.includes(this.props.correctBreed.name);
  }

  handleClick() {
    this.props.dispatch()
  }

  render() {
    return <FreeHint isDisabled={this.isDisabled()} />
  }
}

const mapStateToProps = ({ shownBreeds, correctBreed, answers }) => ({ shownBreeds, correctBreed, answers });

export default connect(mapStateToProps)(FreeHintContainer)