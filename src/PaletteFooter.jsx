import styles from './styles/PaletteFooterStyles';

const PaletteFooter = ({ paletteName, emoji, colorName = null }) => {
    const classes = styles();
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