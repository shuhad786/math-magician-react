/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';

class CalculatorRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cal-container">
        <span className="cal-output">0</span>

        <span className="cal-grid">
          <button type="button" className="btn-grey">AC</button>
          <button type="button" className="btn-grey">+/-</button>
          <button type="button" className="btn-grey">%</button>
          <button type="button" className="btn-orange">/</button>
        </span>

        <span className="cal-grid">
          <button type="button" className="btn-grey">7</button>
          <button type="button" className="btn-grey">8</button>
          <button type="button" className="btn-grey">9</button>
          <button type="button" className="btn-orange">x</button>
        </span>

        <span className="cal-grid">
          <button type="button" className="btn-grey">4</button>
          <button type="button" className="btn-grey">5</button>
          <button type="button" className="btn-grey">6</button>
          <button type="button" className="btn-orange">-</button>
        </span>

        <span className="cal-grid">
          <button type="button" className="btn-grey">1</button>
          <button type="button" className="btn-grey">2</button>
          <button type="button" className="btn-grey">3</button>
          <button type="button" className="btn-orange">+</button>
        </span>

        <span className="cal-grid-last">
          <button type="button" className="btn-grey">0</button>
          <button type="button" className="btn-grey">.</button>
          <button type="button" className="btn-orange">=</button>
        </span>

      </div>
    );
  }
}

export default CalculatorRender;
