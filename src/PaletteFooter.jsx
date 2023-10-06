import './PaletteFooter.css';

const PaletteFooter = ({ paletteName, emoji, colorName = null }) => {

    return (
        <footer className='Palette-footer'>
            { paletteName }
            {
                colorName != null && ' - ' + colorName
            }
            <span className='emoji'>{emoji}</span>
        </footer>
    )
}

export default PaletteFooter;