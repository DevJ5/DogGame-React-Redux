
import React, {Component} from 'react'
import { Image } from '../components/Image'
import {connect} from "react-redux";

class ImageContainer extends Component {
 
render(){
   return  this.props.correctBreed && (<Image correctBreed = {this.props.correctBreed}/>)
}
};

const mapStateToProps = ({ correctBreed }) => ({ correctBreed });

export default connect(mapStateToProps)(ImageContainer)