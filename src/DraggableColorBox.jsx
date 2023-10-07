import { css } from '@emotion/css';

const DraggableColorBox = ({ color }) => {
    const classes = {
        root: css`
            height: 25%;
            width: 20%;
            background-color: ${color};
            margin: 0 auto;
            display: inline-block;
            position: relative;
            cursor: pointer;
            margin-bottom: -3.3px;
            margin-top: -3.5px;
        `,
    }

    return(
        <div className={classes.root} >

        </div>
    )
}

export default DraggableColorBox;