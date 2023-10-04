import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {showOverlay: false};
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy(evt) {
        this.setState({ showOverlay: true }, () => {
            setTimeout( () => this.setState({ showOverlay: false }), 1500)
        })
    }
    render() {
        const { hex, name } = this.props.background;
        const showOverlay = this.state.showOverlay;
        return (
            <CopyToClipboard text={hex} onCopy={this.handleCopy}>
        <div className='ColorBox' style={{backgroundColor: hex}}>
            <div className={`copy-overlay ${showOverlay && 'show'}`} style={{backgroundColor: hex}} />
            <div className={`copy-msg ${showOverlay && 'show'}`}>
                <h1>copied!</h1>
                <p>{hex}</p>
            </div>
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy</button>
            </div>
            <span className='see-more'>More</span>
        </div>
        </CopyToClipboard>
        )
    }
}
