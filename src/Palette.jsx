import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

const Palette = ({ select, setSelect, showSnackbar, setShowSnackbar }) => {
    const [level, setLevel] = useState(500);

    const { paletteId } = useParams();
    const foundPalette = seedColors.find( c => c.id === paletteId );
    if(!foundPalette){
        return <h1>uh oh no colors found!</h1>
    }
    const palette = generatePalette(foundPalette);

    const { colors, emoji, paletteName } = palette;
    const colorBoxes = colors[level].map( color => {
        return (<ColorBox 
            color={color[select]} 
            name={color.name} 
            key={color.id} 
            paletteId={palette.id}
            colorId={color.id}
        /> )
    });
    const classes = styles();

    return (
      <div className={classes.Palette}>
        <Navbar 
            level={level} 
            handleChangeLevel={setLevel} 
            select={select}  
            setSelect={setSelect} 
            showSnackbar={showSnackbar}
            setShowSnackbar={setShowSnackbar}
        />
        <div className={classes.PaletteColors}>
            { colorBoxes }
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }

export default Palette; 

