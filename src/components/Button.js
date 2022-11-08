import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { btn, style, event } = this.props;
    return (
      <button type="button" className={style} onClick={(e) => event(e.target.innerText)}>{btn}</button>
    );
  }
}

export default Button;

