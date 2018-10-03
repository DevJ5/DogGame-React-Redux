import React, {Component} from 'react'
import { connect } from "react-redux";
import FreeHint from "../components/FreeHint";
import { freeHintAction } from "../actions/FreeHintActions";
import capitalize from "../helpers/capitalize";
import { addShownBreeds } from "../actions/AppActions";

class FreeHintContainer extends Component {

  addToShownBreeds(correctBreedName) {
    this.props.dispatch(addShownBreeds(correctBreedName))
  }

  isDisabled() {
    return this.props.shownBreeds.includes(this.props.correctBreed.name);
  }

  handleClick = () => {
    this.props.dispatch(freeHintAction(capitalize(this.props.correctBreed.name), this.props.answers));
    this.addToShownBreeds(this.props.correctBreed.name);
  };

  render() {
    return <FreeHint isDisabled={this.isDisabled()} onClick={this.handleClick} />
  }
}

const mapStateToProps = ({ shownBreeds, correctBreed, answers }) => ({ shownBreeds, correctBreed, answers });

export default connect(mapStateToProps)(FreeHintContainer)