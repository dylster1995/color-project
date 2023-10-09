import { css } from '@emotion/css';
import chroma from 'chroma-js';
const DraggableColorBox = ({ hex, colorName, handleDelete }) => {
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
            align-items: stretch;
            & p {
                padding-left: 5px;
            },
            &:hover span {
                opacity: 100;
            }
        `,
        delete: css`
            background: ${isLightColor ? 'rgba(0,0,0, 0.3)' : 'rgba(255,255,255, 0.3)'};
            color: ${isLightColor ? 'rgba(0,0,0, 1)' : 'rgba(255,255,255, 1)'};
            text-align: center;
            opacity: 0;
            margin-right: 0px;
            height: 20%;
            padding: 10px 10px 0px 10px;
        `,
        row: css`
            width: 100%;
            display: flex;
            justify-content: space-between;
        `,
        deleteButtonRow: css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: end;
        `
    }

    return(
        <div className={classes.root} >
            <div className={classes.row}>
                <p>{colorName}</p>
            </div>
            <div className={classes.deleteButtonRow}>
                <span onClick={handleDelete} className={classes.delete} data-name={colorName}>Delete</span>
            </div>
        </div>
    )
}

export default DraggableColorBox;