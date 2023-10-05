import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import { useState } from 'react';
import ColorBox from './ColorBox';
import './SingleColorPalette.css';

const SingleColorPalette = ({ palettes }) => {
    const { paletteId, colorId } = useParams();
    const foundPalette = palettes.find( p => p.id === paletteId )
    const palette = generatePalette(foundPalette);
    const colors = [];
    const [colorFormat, setColorFormat] = useState('hex');

    for (let i in palette.colors){
        colors.push(palette.colors[i].find( c => c.id === colorId ));
    }
    const colorBoxes = colors.map( c => {
        console.log(c);
    return <ColorBox 
        key={c.name}
        color={c[colorFormat]}
        name={c.name}
        colorId={c.id}
    />}
    ).slice(1);

    return (
        <div className='Palette'>
            <h1>This is the single color palette!</h1>
            <div className='Palette-colors'>
                { colorBoxes }
            </div>
        </div>
    )
}

export default SingleColorPalette;

// color, name, paletteId = null, colorId