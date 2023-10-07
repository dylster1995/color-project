import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import styles from './styles/ColorBoxStyles';

const ColorBox = ({ color, name, paletteId = null, colorId, singleColor = false }) => {
    const lightColorThreshold = .6;
    const isLightColor = chroma(color).luminance() >= lightColorThreshold;
    const [showOverlay, setShowOverlay] = useState(false);
    const classes = styles(singleColor, color, isLightColor);

    function handleCopy(evt) {
        setShowOverlay(true);
        setTimeout( () => setShowOverlay(false), 1300 )
    }
    
    return (
        <CopyToClipboard text={color} onCopy={handleCopy}>
            <div className={classes.ColorBox} >
                <div className={`${classes.copyOverlay} ${showOverlay ? classes.copyOverlayShow : ''}`} />

                <div className={`${classes.copyMsg} ${showOverlay ? classes.copyMsgShow : ''}`}>
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{color}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {
                    paletteId != null && (
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={ evt => evt.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                    )
                }
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox;