import { css } from '@emotion/css';

const classes = () => {

    return {
        Navbar: css`
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 5%;
        `,
        logo: css`
            margin-right: 15px;
            padding: 0 13px;
            font-size: 22px;
            background-color: #d6d6d6;
            font-family: 'Roboto';
            height: 100%;
            display: flex;
            align-items: center;
            & a {
                text-decoration: none;
                color: black;
            }
        `,
        slider: css`
            width: 340px;
            margin: 0 10px;
            display: inline-block;

        `,
        mutedText: css`
            color: rgb(199, 199, 199);
        `,
        selectContainer: css`
            margin-left: auto;
            margin-right: 1rem;
        `

    }
}
export default classes;