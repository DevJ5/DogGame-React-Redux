import React, { Component } from 'react';
import { Image } from '../components/Image';
import { connect } from 'react-redux';

class ImageContainer extends Component {
  render() {
    return (
      this.props.correctBreedObj && (
        <Image correctBreedObj={this.props.correctBreedObj} />
      )
    );
  }
}

const mapStateToProps = ({ correctBreedObj }) => ({ correctBreedObj });

export default connect(mapStateToProps)(ImageContainer);
