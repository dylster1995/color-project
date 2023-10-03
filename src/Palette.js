import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';


export default class Palette extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const colorBoxes = this.props.palette.colors.map( (color, i) => <ColorBox background={color} key={i} /> )
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>
            {/* bunch of color boxes */}
            { colorBoxes }
        </div>
        {/* footer goes here */}
      </div>
    )
  }
}
