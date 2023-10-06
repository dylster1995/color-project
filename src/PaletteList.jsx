import { css } from '@emotion/css';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
    const classes = {
        root: css`
            background-color: blue;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
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
        `,
        palettes: css`
            box-sizing: border-box;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 30%);
            grid-gap: 5%;
        `
    }
    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map( p => <MiniPalette {...p} key={p.id}/> )}
                </div>
            </div>
        </div>
    )
}

export default PaletteList;