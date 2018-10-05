import React, { Component } from "react";
import { connect } from "react-redux";

class ThreeImagesContainer extends Component {
  correctBreed = imageUrl => {
    return imageUrl.split("/")[4].split("-")[0];
  };
  render() {
    return (
      <div className="three-images-container">
        {this.props.threeImages &&
          this.props.threeImages.images.map((image, i) => (
            <img
              className={"picture " + (i + 3)}
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
