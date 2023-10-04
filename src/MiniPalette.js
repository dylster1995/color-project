import { ClassNames } from '@emotion/react';
// import { str } from './strHelpers';

const MiniPalette = ({ colors, emoji, id, paletteName }) => {
    const ReturnComponent = (c) => {
        return <div className={c.root}>
            <div className={c.colors}></div>
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
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    })}
                    colors={css({
                        backgroundColor: 'grey',
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
                />
            )}   
        </ClassNames>
    )
}

export default MiniPalette;