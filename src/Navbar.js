import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const { level, handleChangeLevel } = this.props;
    return (
      <header className='Navbar'>
        <div className='logo'>
            <a href='#'>reactcolorpicker</a>
        </div>
        <div className='slider-container'>
            <span>Level: {level}</span>
            <div className='slider'>
                <Slider defaultValue={level} min={100} max={900} onChange={handleChangeLevel} step={100} />
            </div>
        </div>

      </header>
    )
  }
}
