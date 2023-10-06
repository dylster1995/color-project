import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import chroma from 'chroma-js';
import './ColorBox.css';

const ColorBox = ({ color, name, paletteId = null, colorId }) => {
    const darkColorThreshold = .08;
    const isDarkColor = chroma(color).luminance() <= darkColorThreshold;
    const lightColorThreshold = .6;
    const isLightColor = chroma(color).luminance() >= lightColorThreshold;

    function handleCopy(evt) {
        setShowOverlay(true);
        setTimeout( () => setShowOverlay(false), 1500 )
    }
    const ReturnComponent = ({ copyText, colorName, seeMore, copyButton, ColorBox }) => {
        return (
            <CopyToClipboard text={color} onCopy={handleCopy}>
                <div className={ColorBox} >
                    <div className={`copy-overlay ${showOverlay ? 'show' : ''}`} style={{backgroundColor: color}} />
                    <div className={`copy-msg ${showOverlay ? 'show' : ''} ${isLightColor && 'dark-font'}`}>
                        <h1>copied!</h1>
                        <p className={copyText}>{color}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className={colorName}>{name}</span>
                        </div>
                        <button className={copyButton}>Copy</button>
                    </div>
                    {
                        paletteId != null && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={ evt => evt.stopPropagation()}>
                            <span className={seeMore}>More</span>
                        </Link>
                        )
                    }
                </div>
            </CopyToClipboard>
    )}
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <ClassNames>
            {( { css }) => (
                <ReturnComponent
                    copyText={css({
                        color: isLightColor ? 'black' : 'white'
                    })}
                    colorName={css({
                        color: isDarkColor ? 'white' : 'black'
                    })}
                    seeMore={css({
                        background: 'rgba(255,255,255, 0.3)',
                        position: 'absolute',
                        border: 'none',
                        right:'0px',
                        bottom:'0px',
                        color: isLightColor ? 'black' : 'white',
                        width: '60px',
                        height: '30px',
                        textAlign: 'center',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                    })}
                    copyButton={css({
                        width: '100px',
                        height: '30px',
                        position: 'absolute',
                        display: 'inline-block',
                        top: '50%',
                        left: '50%',
                        marginLeft: '-50px',
                        marginTop: '-15px',
                        textAlign:'center',
                        outline: 'none',
                        background: 'rgba(255,255,255, 0.3)',
                        fontSizee: '1rem',
                        lineHeight: '30px',
                        color: isLightColor ? 'black' : 'white',
                        textTransform: 'uppercase',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        opacity: '0'
                    })}
                    ColorBox={css({
                        backgroundColor: color,
                        width: '20%',
                        height: paletteId != null ? '25%' : '50%',
                        margin: '0 auto',
                        display: 'inline-block',
                        position: 'relative',
                        cursor: 'pointer',
                        marginBottom: '-4px',
                        '&:hover button': {
                            opacity: '1',
                            transition: '.5s'
                        }
                    })}
                />
        )}
            </ClassNames>
        )
}

export default ColorBox;


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