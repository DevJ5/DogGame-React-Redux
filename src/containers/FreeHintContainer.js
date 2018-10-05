import React, {Component} from 'react'
import { connect } from "react-redux";
import FreeHint from "../components/FreeHint";
import { freeHintAction } from "../actions/FreeHintActions";
import { addShownBreeds } from "../actions/AppActions";

class FreeHintContainer extends Component {

  addToShownBreeds(correctBreedName) {
    this.props.dispatch(addShownBreeds(correctBreedName))
  }

  isDisabled() {
    return this.props.shownBreeds.includes(this.props.correctBreedObj.name);
  }

  handleClick = () => {
    this.props.dispatch(freeHintAction(this.props.correctBreedObj.name, this.props.answers));
    this.addToShownBreeds(this.props.correctBreedObj.name);
  };

  render() {
    return <FreeHint isDisabled={this.isDisabled()} onClick={this.handleClick} />
  }
}

const mapStateToProps = ({ shownBreeds, correctBreedObj, answers }) => ({ shownBreeds, correctBreedObj, answers });

export default connect(mapStateToProps)(FreeHintContainer)