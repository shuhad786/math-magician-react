import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { btn, style, event } = this.props;
    return (
      <button type="button" className={style} onClick={(e) => event(e.target.innerText)}>{btn}</button>
    );
  }
}

Button.propTypes = {
  btn: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Button;
