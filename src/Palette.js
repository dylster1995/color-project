import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import './Palette.css';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500 };
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
    }
    handleChangeLevel(level) {
        this.setState({ level })
    }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map( (color, i) => <ColorBox background={color} key={i} /> )
    return (
      <div className='Palette'>
        <Slider defaultValue={level} min={100} max={900} onChange={this.handleChangeLevel} step={100} />
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
