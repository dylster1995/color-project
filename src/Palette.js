import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

const Palette = () => {
    const [level, setLevel] = useState(500);
    const [select, setSelect] = useState('hex');
    const [showSnackbar, setShowSnackbar] = useState(false);

    const { paletteId } = useParams();
    const foundPalette = seedColors.find( c => c.id === paletteId );
    if(!foundPalette){
        return <h1>uh oh no colors found!</h1>
    }
    const palette = generatePalette(foundPalette)

    const { colors, emoji, paletteName } = palette;
    const colorBoxes = colors[level].map( color => <ColorBox color={color[select]} name={color.name} key={color.id} /> );

    return (
      <div className='Palette'>
        <Navbar 
            level={level} 
            handleChangeLevel={setLevel} 
            select={select}  
            handleChangeSelect={setSelect} 
            showSnackbar={showSnackbar}
            handleCloseSnackbar={setShowSnackbar}
        />
        <div className='Palette-colors'>
            { colorBoxes }
        </div>
        <footer className='Palette-footer'>
            { paletteName }
            <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    )
  }

export default Palette; 
