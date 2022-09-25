import * as React from 'react';
import renderer from 'react-test-renderer';
import LandingPage from '../pages/LandingPage';

it('LandingPage renders correctly', () => {
  const component = renderer.create(<LandingPage />);
  const result = component.toJSON();
  expect(result).toMatchSnapshot();
});