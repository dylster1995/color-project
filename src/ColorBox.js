import React, { Component } from 'react'
import './ColorBox.css';

export default class ColorBox extends Component {
    constructor(props){
        super(props);
    }
  render() {
    console.log(this.props.background.color)
    return (
      <div className='ColorBox' style={{backgroundColor: this.props.background.color}}>
        <span>{this.props.background.name}</span>
      </div>
    )
  }
}
