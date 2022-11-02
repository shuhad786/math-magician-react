/* eslint linebreak-style: ['error', 'windows'] */
import React, { Component } from 'react';
import Btn from './Button';
import calculate from '../logic/calculator';

class CalculatorRender extends Component {
  constructor(props) {
    super(props);
    this.Val = [
      { btn: 'AC', style: 'btn grey' },
      { btn: '+/-', style: 'btn grey' },
      { btn: '%', style: 'btn grey' },
      { btn: '/', style: 'btn orange' },
      { btn: '7', style: 'btn grey' },
      { btn: '8', style: 'btn grey' },
      { btn: '9', style: 'btn grey' },
      { btn: 'x', style: 'btn orange' },
      { btn: '4', style: 'btn grey' },
      { btn: '5', style: 'btn grey' },
      { btn: '6', style: 'btn grey' },
      { btn: '-', style: 'btn orange' },
      { btn: '1', style: 'btn grey' },
      { btn: '2', style: 'btn grey' },
      { btn: '3', style: 'btn grey' },
      { btn: '+', style: 'btn orange' },
      { btn: '0', style: 'btn grey btn-zero' },
      { btn: '.', style: 'btn grey' },
      { btn: '=', style: 'btn orange' },
    ];
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const obj = calculate(this.state, e);
    this.setState(obj);
  }

  render() {
    let { total, next, operation } = this.state;
    if (!total && !next && !operation) {
      total = 0;
      next = null;
      operation = null;
    }
    return (
      <div className="cal-container">
        <div className="cal-output">
          { next || operation || total }
        </div>
        <div className="button-container">
          {
            this.Val.map((b) => <Btn key={b.btn}
            btn={b.btn}
            event={(e) => this.handleClick(e)}
            style={b.style} />)
          }
        </div>
      </div>
    );
  }
}

export default CalculatorRender;
