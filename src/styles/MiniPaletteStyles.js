import { css } from '@emotion/css';

const classes = () => {
   return {root: css`
        background-color: white;
        border: 1px solid black;
        borderRadius: 5px;
        padding: 0.5rem;
        position: relative;
        overflow: hidden;
        height: 100%;
        '&:hover': {
            cursor: pointer;
        }
    `,
    colors: css`
        backgroun-color: grey;
        height: 170px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
    `,
    title: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        color: black;
        padding-top: 0.5rem;
        font-tize: 1rem;
        position: relative;
    `,
    emoji: css`
        margin-left: auto;
        font-tize: 1.5rem;       
    `,
    miniColor: css`
        width: 20%;
        height: 25%;
        display: inline-block;
        margin: 0 auto;
        position: relative;
        margin-bottom: -3.7px;
    `}
}

export default classes;