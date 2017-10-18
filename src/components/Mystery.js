import React, {Component} from 'react';
import './Mystery.scss';

class Mystery extends Component {

  constructor(props) {
    super(props);
    this.ripple = this.ripple.bind(this);
  }

  ripple(e) {
  	let canvas = document.getElementsByClassName('mystery__canvas')[0];
  	if (canvas.getElementsByClassName('ripple').length === 0)
  		canvas.innerHTML = '<span class="ripple"></span>';

  	let ripple = canvas.getElementsByClassName('ripple')[0];
    ripple.classList.remove('animate');


    // set the diameter of the ripple effect to either the widh or the height of
  	// the element clicked, whichever is the largest, to make sure it covers it all
    let diam = Math.max(canvas.clientWidth, canvas.clientHeight);
    // get the click coordinates relative to page and canvas offset
    let x = e.pageX - canvas.offsetLeft - diam / 2;
    let y = e.pageY - canvas.offsetTop - diam / 2;
  	// set the ripple position and start animation
    ripple.style.cssText = `height: ${diam}px; width:${diam}px; top: ${y}px; left:${x}px`;
    ripple.classList.add('animate');
  }

  render() {
    return (
      <div className='mystery page-content'>
        <div className="mystery__canvas-wrapper">
          <div className="mystery__canvas" onClick={this.ripple}></div>
        </div>
      </div>
    );
  }
}
export default Mystery;
