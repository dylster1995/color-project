import { ClassNames } from '@emotion/react';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
    const ReturnComponent = c => {
        return <div className={c.root}>
            <div className={c.container}>
                <nav className={c.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={c.palettes}>
                    {palettes.map( p => <MiniPalette {...p} key={p.id}/> )}
                </div>
            </div>
        </div>
    }
    return(
        <ClassNames>
        {( { css }) => (
            <ReturnComponent
                root={css({
                    backgroundColor: 'blue',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                })}
                container={css({
                    width: '50%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    flexWrap: 'wrap'
                })}
                nav={css({
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    color: 'white'
                })}
                palettes={css({
                    boxSizing: 'border-box',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 30%)',
                    gridGap: '5%'
                })}
            />
        )}   
    </ClassNames>

    )
}

export default PaletteList;