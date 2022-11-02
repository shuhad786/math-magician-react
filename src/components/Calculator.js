/* eslint-disable */
import React, { useState } from 'react'
import Btn from './Button';
import calculate from '../logic/calculator';


function calculator() {
const [result, setResult] = useState({ total: 0, next: null, operation: null });

const Val = [
  { btn: 'AC', style: 'btn grey' },
  { btn: '+/-', style: 'btn grey' },
  { btn: '%', style: 'btn grey' },
  { btn: '÷', style: 'btn orange' },
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
  { btn: '0', style: 'btn grey wide' },
  { btn: '.', style: 'btn grey' },
  { btn: '=', style: 'btn orange' },
];

const handleClick = (e) => {
  const obj = calculate(result, e);
  if (!obj.total && !obj.next && !obj.operation) {
    obj.total = 0;
    obj.next = null;
    obj.operation = null;
  }
  setResult(obj);
};
    
  return (
    <div className="cal-container">
      <div className="cal-output">
        { result.next || result.operation || result.total }
      </div>
      <div className="button-container">
        {
          Val.map((b) => <Btn key={b.btn} btn={b.btn} event={(e) => handleClick(e)} style={b.style} />)
        }
      </div>
    </div>
  )
}

export default calculator;
