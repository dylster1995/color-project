import React, { Component } from 'react'

export default class Palette extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>
            {/* bunch of color boxes */}
        </div>
        {/* footer goes here */}
      </div>
    )
  }
}