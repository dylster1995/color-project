import { css } from '@emotion/css';
const classes = () => {
    return {
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
}
export default classes;