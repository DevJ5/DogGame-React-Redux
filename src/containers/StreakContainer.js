import React, {Component} from 'react'
import {connect} from "react-redux";
import Streak from "../components/scores/Streak";

class StreakContainer extends Component {
  render () {
    return <Streak streak={this.props.currentStreak} />
  }
}

const mapStateToProps = ({ currentStreak }) => ({ currentStreak });

export default connect(mapStateToProps)(StreakContainer)