import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';

const ColorBox = ({ color, name, paletteId = null, colorId }) => {
    console.log(`color: ${color}\nname: ${name}\npaletteId: ${paletteId}\ncolorId: ${colorId}`)
    function handleCopy(evt) {
        setShowOverlay(true);
        setTimeout( () => setShowOverlay(false), 1500 )
    }
        const [showOverlay, setShowOverlay] = useState(false);
        return (
            <CopyToClipboard text={color} onCopy={handleCopy}>
                <div className='ColorBox' style={{backgroundColor: color}}>
                    <div className={`copy-overlay ${showOverlay && 'show'}`} style={{backgroundColor: color}} />
                    <div className={`copy-msg ${showOverlay && 'show'}`}>
                        <h1>copied!</h1>
                        <p>{color}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className='box-content-name'>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    {
                        paletteId != null && (
                        <Link to={`/palette/${paletteId}/${colorId}`} onClick={ evt => evt.stopPropagation()}>
                            <span className='see-more'>More</span>
                        </Link>
                        )
                    }
                </div>
            </CopyToClipboard>
        )
}

export default ColorBox;
