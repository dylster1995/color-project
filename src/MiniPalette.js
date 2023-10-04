import { ClassNames } from '@emotion/react';
// import { str } from './strHelpers';

const MiniPalette = ({ colors, emoji, id, paletteName }) => {
    const ReturnComponent = (c) => {
        const miniColorBoxes = colors.map(color => {
            return <div className={c.miniColor} style={{backgroundColor: color.color}} key={color.name}>
                
            </div>
        })
        return <div className={c.root}>
            <div className={c.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={c.title}>{paletteName} <span className={c.emoji}>{emoji}</span></h5>
        </div>
    }
    return(
        <ClassNames>
            {({ css }) => (
                <ReturnComponent
                    root={css({
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '5px',
                        padding: '0.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    })}
                    colors={css({
                        backgroundColor: 'grey',
                        height: '170px',
                        width: '100%',
                        borderRadius: '5px',
                        overflow: 'hidden'
                    })}
                    title={css({
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '0',
                        color: 'black',
                        paddingTop: '0.5rem',
                        fontSize: '1rem',
                        position: 'relative'
                    })}
                    emoji={css({
                        marginLeft: 'auto',
                        fontSize: '1.5rem'
                    })}
                    miniColor={css({
                        width: '20%',
                        height: '25%',
                        display: 'inline-block',
                        margin: '0 auto',
                        position: 'relative',
                        marginBottom: '-3.7px',
                    })}
                />
            )}   
        </ClassNames>
    )
}

export default MiniPalette;