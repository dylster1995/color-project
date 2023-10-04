// import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
    return(
        <div>
            <h1>Palette List!</h1>
            {palettes.map( p => <MiniPalette {...p} key={p.id}/> )}
        </div>
    )
}

export default PaletteList;