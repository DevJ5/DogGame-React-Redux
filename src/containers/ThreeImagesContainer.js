import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThreeImagesContainer extends Component {
  correctBreed = imageUrl => {
    return imageUrl.split('/')[4].split('-')[0];
  };
  render() {
    return (
      <div className="three-images-container">
        {this.props.threeImages &&
          this.props.threeImages.images.map(image => (
            <img
              id={'img-' + this.correctBreed(image)}
              className="three-images-hover"
              onClick={this.props.onClick}
              src={image}
              value={this.correctBreed(image)}
              alt=""
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ threeImages }) => ({ threeImages });

export default connect(mapStateToProps)(ThreeImagesContainer);
