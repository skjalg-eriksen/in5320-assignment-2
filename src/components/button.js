import React from 'react';
import './Button.css';

class Button extends React.Component { 

  handleSubmit = event => {
    event.preventDefault();
    this.props.func();
  }
  
  render(name, func) {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="Button" type="submit" value={this.props.name}/>
        </form>
      </div>
    );
  }
}

export default Button;
