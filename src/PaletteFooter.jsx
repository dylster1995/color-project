import './PaletteFooter.css';
import { css } from '@emotion/css';

const PaletteFooter = ({ paletteName, emoji, colorName = null }) => {
    const classes = {
        PaletteFooter: css`
            background-color: white;
            height: 5%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-weight: bold;
            font-size: 1rem;
        `,
        emoji: css`
            font-size: 1rem;
            margin: 0 1rem;
        `
    }
    return (
        <footer className={classes.PaletteFooter}>
            { paletteName }
            {
                colorName != null && ' - ' + colorName
            }
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default PaletteFooter;