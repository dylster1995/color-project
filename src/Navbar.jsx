// import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import { IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

const Navbar = ({ level = null, handleChangeLevel = null, select, setSelect, showSnackbar, setShowSnackbar, paletteId }) => {
    const classes = styles();
    const navigate = useNavigate();
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
            <Link to='/'>reactcolorpicker</Link>
        </div>
        {
            level != null && <div>
                <span>Level: {level}</span>
                <div className={classes.slider}>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        onChange={handleChangeLevel} 
                        step={100} 
                    />
                </div>
           
            </div>
         }
        <div className={classes.selectContainer}>
            {
                paletteId === undefined ? null :
                <Button onClick={() => navigate(`/edit/palette/${paletteId}`)}>
                    Edit
                </Button>
            }
            <Select 
                id='colorType'
                name='colorType'
                onChange={(evt) => {
                    setSelect(evt.target.value);
                    setShowSnackbar(true);
                }}
                value={select}
                style={{minWidth: 120, maxHeight: 30}}
            >
                <MenuItem value='hex'>HEX <span className={classes.mutedText}> - #ffffff</span></MenuItem>
                <MenuItem value='rgb'>RGB <span className={classes.mutedText}> - rgb(255, 255, 255)</span></MenuItem>
                <MenuItem value='rgba'>RGBA <span className={classes.mutedText}> - rgba(255, 255, 255, 1.0)</span></MenuItem>
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
            onClose={() => setShowSnackbar(false)}
            action={[
                <IconButton onClick={() => setShowSnackbar(false)} color='inherit' key="close" aria-label='close'>
                    <CloseIcon />
                </IconButton>
            ]}
        />
      </header>
    )
  }

export default Navbar;
