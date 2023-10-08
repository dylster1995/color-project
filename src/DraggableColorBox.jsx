import { css } from '@emotion/css';
import chroma from 'chroma-js';
const DraggableColorBox = ({ hex, colorName }) => {
    const lightColorThreshold = .6;
    const isLightColor = chroma(hex).luminance() >= lightColorThreshold;

    const classes = {
        root: css`
            height: 25%;
            width: 20%;
            background-color: ${hex};
            margin: 0 auto;
            // display: inline-block;
            position: relative;
            cursor: pointer;
            margin-bottom: -3.3px;
            color: ${isLightColor ? 'black' : 'white'};
            display: inline-flex;
            align-items: end;
            & p {
                padding-left: 5px;
            }
        `,
    }

    return(
        <div className={classes.root} >
            <p>{colorName}</p>
        </div>
    )
}

export default DraggableColorBox;