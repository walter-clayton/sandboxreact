import React from 'react';

class ChangeColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick() {
        this.props.clickHandler();
        console.log('clicked');
      }
  render() {
    return (
    <button onClick={this.handleClick}>Change the color {this.props.currentColor}</button>    
    );
  }
} 

export default ChangeColorButton;