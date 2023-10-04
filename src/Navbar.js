import React, { Component } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

  render() {
    const { level, handleChangeLevel, select, handleChangeSelect, showSnackbar, handleCloseSnackbar } = this.props;

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
                id='colorType'
                name='colorType'
                onChange={handleChangeSelect}
                value={select}
                style={{minWidth: 120, maxHeight: 30}}
            >
                <MenuItem value='hex'>HEX <span className='muted-text'> - #ffffff</span></MenuItem>
                <MenuItem value='rgb'>RGB <span className='muted-text'> - rgb(255, 255, 255)</span></MenuItem>
                <MenuItem value='rgba'>RGBA <span className='muted-text'> - rgba(255, 255, 255, 1.0)</span></MenuItem>
            </Select>
        </div>
        <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} 
            open={showSnackbar}
            autoHideDuration={3000}
            message={<span id='message-id'>Format changed to {select.toUpperCase()}</span>}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            onClose={handleCloseSnackbar}
            action={[
                <IconButton onClick={handleCloseSnackbar} color='inherit' key="close" aria-label='close'>
                    <CloseIcon />
                </IconButton>
            ]}
        />
      </header>
    )
  }
}
