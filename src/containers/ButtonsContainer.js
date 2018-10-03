import React, { Component } from 'react';
import { Buttons } from '../components/Buttons';
import { connect } from 'react-redux';

class ButtonsContainer extends Component {
  render() {
    return (
      <Buttons answers={this.props.answers} onClick={this.props.onClick} />
    );
  }
}

const mapStateToProps = ({ answers }) => ({ answers });

export default connect(mapStateToProps)(ButtonsContainer);
