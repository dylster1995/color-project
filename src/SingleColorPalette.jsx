import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


const SingleColorPalette = ({ palettes, select, setSelect, showSnackbar, setShowSnackbar }) => {
    const { paletteId, colorId } = useParams();
    const foundPalette = palettes.find( p => p.id === paletteId )
    const palette = generatePalette(foundPalette);
    const colors = [];

    for (let i in palette.colors){
        colors.push(palette.colors[i].find( c => c.id === colorId ));
    }
    const colorBoxes = colors.map( c => {
        return <ColorBox 
            key={c.name}
            color={c[select]}
            name={c.name}
            colorId={c.id}
        />
    }).slice(1);

    return (
        <div className='Palette'>
            <Navbar 
                select={select}    
                setSelect={setSelect}
                showSnackbar={showSnackbar}
                setShowSnackbar={setShowSnackbar}
            />
            <div className='Palette-colors'>
                { colorBoxes }
            </div>
            <PaletteFooter  paletteName={palette.paletteName} emoji={palette.emoji} colorName={colorId}/>
        </div>
    )
}

export default SingleColorPalette;
