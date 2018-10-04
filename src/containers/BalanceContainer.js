import React, {Component} from 'react';
import { connect } from "react-redux";
import Balance from "../components/Balance";

class BalanceContainer extends Component {
  render() {
    return <Balance balance={this.props.balance} />
  }
}

const mapStateToProps = ({ balance }) => ({ balance });
export default connect(mapStateToProps)(BalanceContainer)