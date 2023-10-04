import React, { Component } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex"}
    }
  render() {
    const { level, handleChangeLevel, handleChangeSelect, select } = this.props;
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
        <div className='select-container'>
            <Select 
                onChange={handleChangeSelect}
                value={select}
                style={{minWidth: 120, maxHeight: 30}}
            >
                <MenuItem value='hex'>HEX <span className='muted-text'>- #ffffff</span></MenuItem>
                <MenuItem value='rgb'>RGB <span className='muted-text'>- rgb(255, 255, 255)</span></MenuItem>
                <MenuItem value='rgba'>RGBA <span className='muted-text'>- rgba(255, 255, 255, 1.0)</span></MenuItem>
            </Select>
        </div>
      </header>
    )
  }
}
