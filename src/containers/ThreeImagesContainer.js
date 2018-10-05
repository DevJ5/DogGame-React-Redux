import React, { Component } from 'react';
import { connect } from 'react-redux';
import extractBreedName from "../helpers/extractBreedName";

class ThreeImagesContainer extends Component {

  render() {
    return (
      <div className="three-images-container">
        {this.props.threeImages &&
          this.props.threeImages.map((image, index) => (
            <img
              id={'img-' + extractBreedName(image)}
              className="three-images-hover"
              onClick={this.props.onClick}
              src={image}
              value={extractBreedName(image)}
              alt=""
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ threeImages, answers }) => ({ threeImages, answers });

export default connect(mapStateToProps)(ThreeImagesContainer);
