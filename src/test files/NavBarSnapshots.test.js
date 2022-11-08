import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('Navbar renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
