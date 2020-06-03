import React, { Component } from 'react';
import './Images.css';

class EnlargeImage extends Component{
  render(){

  
  return (
    
      <div className="popupParent">
        <div className="popupImage">
            <button
                className="imageClosingButton"
                onClick={this.props.closePopup}
                >

                </button>
                <img src={this.props.popImageUrl}/>

        </div>
      </div>
  
  );
}
}

export default EnlargeImage;
