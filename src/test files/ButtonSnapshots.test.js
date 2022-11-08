import renderer from 'react-test-renderer';
import Button from '../components/Button';
import React from 'react';

it('Button renders correctly', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
