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
            & .rc-slider-rail {
                height: 8px;
                background-color: lightgray;
            }
            & .rc-slider-track {
                background-color: lightgray;
            }
            & .rc-slider-handle, .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
                background-color: green;
                outline: none;
                border: 2px solid green;
                border-color: green;
                box-shadow: none;
                width:13px;
                height: 13px;
                margin-top: -3px;
                &:focus :hover {
                    background-color: green;
                    outline: none;
                    border: 2px solid green;
                    border-color: green;
                    box-shadow: none;
                    width:13px;
                    height: 13px;
                    margin-top: -3px;
                }
            }
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