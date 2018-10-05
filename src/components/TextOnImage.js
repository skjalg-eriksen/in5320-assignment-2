import React from 'react';
import './TextOnImage.css';

class TextOnImage extends React.Component { 

  handleSubmit = event => {
    event.preventDefault();
    this.props.func();
  }
  
  render(image_src, text_) {
    return (
      <div className="TextOnImage">
        <div className="wrapper">
          <div className="text-wrapper">
            <p >{this.props.text_}</p>
          </div> 
          <img alt="https://shibe.online/" src={this.props.image_src} />
            
        </div>
      </div>
    );
  }
}

export default TextOnImage;
