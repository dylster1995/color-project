import styles from './styles/MiniPaletteStyles';
import { useNavigate } from 'react-router-dom';

const MiniPalette = ({ colors, emoji, id, paletteName }) => {
    const navigate = useNavigate();
    const classes = styles();
    const handleClick = () => {
        navigate(`/palette/${id}`);
    }

    const miniColorBoxes = colors.map(color => 
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name} 
    />)

    return(
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default MiniPalette;