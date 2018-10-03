import React, {Component} from 'react'
import { connect } from "react-redux";
import StreakDots from "../components/scores/StreakDots";

import '../styles/streakDots.css'

class StreakDotsContainer extends Component {
  render() {
    return <StreakDots streak={this.props.currentStreak} />
  }
}

const mapStateToProps = ({ currentStreak }) => ({ currentStreak });

export default connect(mapStateToProps)(StreakDotsContainer)