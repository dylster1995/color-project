import { Link } from 'react-router-dom';

const PaletteList = ({ palettes }) => {
    return(
        <div>
            <h1>Palette List!</h1>
            {palettes.map(p => <Link to={`/palette/${p.id}`} key={p.id}>{p.paletteName}</Link>)}
        </div>
    )
}

export default PaletteList;