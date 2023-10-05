import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
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
        const { color, name } = this.props;
        const showOverlay = this.state.showOverlay;
        return (
            <CopyToClipboard text={color} onCopy={this.handleCopy}>
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
            <Link to='/' onClick={ evt => evt.stopPropagation()}>
            <span className='see-more'>More</span>
            </Link>
        </div>
        </CopyToClipboard>
        )
    }
}
