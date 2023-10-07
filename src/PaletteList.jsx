import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';

const PaletteList = ({ palettes }) => {
    const classes = styles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>New</Link>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map( p => <MiniPalette {...p} key={p.id}/> )}
                </div>
            </div>
        </div>
    )
}

export default PaletteList;