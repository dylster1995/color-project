import { css } from '@emotion/css';

const classes = () => {

    return {
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
}
export default classes;