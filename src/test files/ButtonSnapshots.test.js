import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../components/Button';

it('Button renders correctly', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
