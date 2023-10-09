import { css } from '@emotion/css';

const classes = () => {
    return {
        root: css`
            background-color: blue;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            overflow: auto;
        `,
        container: css`
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            flex-wrap: wrap;
        `,
        nav: css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            color: white;
            align-items: center;
            & a {
                text-decoration: none;
                color: white;
            }
        `,
        palettes: css`
            box-sizing: border-box;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 30%);
            grid-gap: 5%;
        `
    }
}
export default classes;