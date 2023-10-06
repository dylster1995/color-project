import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { css } from '@emotion/css';

const SingleColorPalette = ({ palettes, select, setSelect, showSnackbar, setShowSnackbar }) => {
    const { paletteId, colorId } = useParams();
    const foundPalette = palettes.find( p => p.id === paletteId )
    const palette = generatePalette(foundPalette);
    const colors = [];
    const classes = {
        SingleColorPalette: css`
            height: 50%;
            margin-top: -1px;
            background-color: black;
        `,
        goBack: css`
            width: 100px;
            height: 30px;
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -15px;
            text-align:center;
            outline: none;
            background: rgba(255,255,255, 0.3);
            font-size: 1rem;
            line-height: 30px;
            color: white;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            text-decoration: none;
        `,
        PaletteColors: css`
            height: 90%;
        `,
        Palette: css`
            height: 100vh;
        `,
        ColorBox: css`
            width: 20%;
            height:50%;
            margin: 0 auto;
            display: inline-block;
            position: relative;
            cursor: pointer;
            margin-bottom: -4px;
            margin-top: -1px;
            background-color: black;
        `
    }

    for (let i in palette.colors){
        colors.push(palette.colors[i].find( c => c.id === colorId ));
    }
    const colorBoxes = colors.map( c => {
        return <ColorBox 
            key={c.name}
            color={c[select]}
            name={c.name}
            colorId={c.id}
            singleColor={true}
        />
    }).slice(1);

    return (
        <div className={classes.Palette}>
            <Navbar 
                select={select}    
                setSelect={setSelect}
                showSnackbar={showSnackbar}
                setShowSnackbar={setShowSnackbar}
            />
            <div className={classes.PaletteColors}>
                { colorBoxes }
                <div className={classes.ColorBox}>
                    <div>
                    <Link to={`/palette/${paletteId}`} onClick={ evt => evt.stopPropagation()}>
                        <button className={classes.goBack}>Go Back</button>
                    </Link>
                    </div>
                </div>
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} colorName={colorId}/>
        </div>
    )
}

export default SingleColorPalette;
