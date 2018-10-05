import React, { Component } from "react";
import { connect } from "react-redux";
import extractBreedName from "../helpers/extractBreedName";

class ThreeImagesContainer extends Component {
  render() {
    return (
      <div className="three-images-container">
        {this.props.threeImages &&
          this.props.answers.length > 0 &&
          this.props.threeImages.map((image, index) => {
            const disabled = this.props.answers[index][0] === "_";
            const className =
              "three-images-hover" + (disabled ? " disabled-image" : "");
            const onClick = disabled ? null : this.props.onClick;

            return (
              <img
                id={"img-" + extractBreedName(image)}
                className={className}
                onClick={onClick}
                src={image}
                value={extractBreedName(image)}
                alt=""
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ threeImages, answers }) => ({
  threeImages,
  answers
});

export default connect(mapStateToProps)(ThreeImagesContainer);
