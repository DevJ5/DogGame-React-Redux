import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThreeImagesContainer extends Component {

  extractBreedName = imageUrl => {
    return imageUrl.split('/')[4].split('-')[0];
  };

  render() {
    return (
      <div className="three-images-container">
        {this.props.threeImages &&
          this.props.threeImages.map(image => (
            <img
              className=""
              onClick={this.props.onClick}
              src={image}
              value={this.extractBreedName(image)}
              alt=""
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ threeImages }) => ({ threeImages });

export default connect(mapStateToProps)(ThreeImagesContainer);
