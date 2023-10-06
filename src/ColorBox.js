import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import chroma from 'chroma-js';
import './ColorBox.css';

const ColorBox = ({ color, name, paletteId = null, colorId, singleColor = false }) => {
    const lightColorThreshold = .6;
    const isLightColor = chroma(color).luminance() >= lightColorThreshold;
    const [showOverlay, setShowOverlay] = useState(false);

    function handleCopy(evt) {
        setShowOverlay(true);
        setTimeout( () => setShowOverlay(false), 1300 )
    }
    const classes = {
        ColorBox: css`
            width: 20%;
            height: ${singleColor === true ? '50%' : '25%'};
            margin: 0 auto;
            display: inline-block;
            position: relative;
            cursor: pointer;
            margin-bottom: -3.9px;
            background-color: ${color};
            margin-top: ${singleColor ? '-1px' : '0px'};
            &:hover button {
                opacity: 1;
                transition: .5s;
            }
        `,
        copyButton: css`
            width: 100px;
            height: 30px;
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -15px;
            text-align:center;
            outline: none;
            background: ${isLightColor ? 'rgba(0,0,0, 0.3)' : 'rgba(255,255,255, 0.3)'};
            font-size: 1rem;
            line-height: 30px;
            color: ${isLightColor ? 'black' : 'white'};
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            text-decoration: none;
            opacity: 0;
        `,
        backButton: css`
            width: 100px;
            height: 30px;
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -15px;
            text-align:center;
            outline: none;
            background: rgba(255,255,255, 0.3);
            font-size: 1rem;
            line-height: 30px;
            color: white;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            text-decoration: none;
        `,
        boxContent: css`
            position: absolute;
            width: 100%;
            left: 0px;
            bottom: 0px;
            padding-bottom:10px;
            color: black;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 12px;
            padding-left: 10px;
        `,
        seeMore: css`
            background: rgba(255,255,255, 0.3);
            position: absolute;
            border: none;
            right:0px;
            bottom:0px;
            color: ${ isLightColor ? 'black' :  'white'};
            width: 60px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            text-transform: uppercase;
        `,
        copyOverlay: css`
            opacity: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            transition: transform 0.6s ease-in-out;
            transform: scale(0.1);
            background-color: ${color}
        `,
        copyOverlayShow: css`
            opacity: 1;
            transform: scale(50);
            z-index: 10;
            position: absolute;
            color: ${color};
        `,
        copyMsg: css`
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 4rem;
            transform: scale(0.1);
            opacity: 0;
            color: ${ isLightColor ? 'black' :  'white'};
            width: 0%;
            &h1 {
                font-weight: 400;
                text-shadow: 1px 2px black;
                background: rgba(255, 255, 255, 0.2);
                width: 100%;
                text-align: center;
                margin-bottom: 0;
                padding: 1rem;
                text-transform: uppercase;
            }
            &p {
                font-size: 2rem;
                font-weight: 100;
            }
        `,
        copyMsgShow: css`
            opacity: 1;
            transform: scale(1);
            z-index: 25;
            width: 100%;
            transition: all 0.6s ease-in-out;
            transition-delay: 0.3s;
            color: ${ isLightColor ? 'black' :  'white'};
        `,
        goBack: css`
            background-color: black;
        `,
        colorName: css`
            color: ${ isLightColor ? 'black' :  'white'};
        `,
        darkFont: css`
            color: rgba(0, 0, 0, 1);
        `
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