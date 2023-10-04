import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500, select: 'hex', showSnackbar: false};
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    }
    handleChangeLevel(level) {
        this.setState({ level });
    }
    handleChangeSelect(evt) {
        const select = evt.target.value;
        this.setState({ select, showSnackbar: true });
    }
    handleCloseSnackbar(evt) {
        this.setState({ showSnackbar: false })
    }
  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, select, showSnackbar } = this.state;
    const colorBoxes = colors[level].map( color => <ColorBox color={color[select]} name={color.name} key={color.id} /> );
    return (
      <div className='Palette'>

        <Navbar 
            level={level} 
            handleChangeLevel={this.handleChangeLevel} 
            select={select}  
            handleChangeSelect={this.handleChangeSelect} 
            showSnackbar={showSnackbar}
            handleCloseSnackbar={this.handleCloseSnackbar}
        />
        <div className='Palette-colors'>
            { colorBoxes }
        </div>
        <footer className='Palette-footer'>
            { paletteName }
            <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    )
  }
}
