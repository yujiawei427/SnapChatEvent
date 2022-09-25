import * as React from 'react';
import CreatingEventPage from '../pages/CreatingEventPage';
import renderer from 'react-test-renderer';

it('CreatingEventPage renders correctly', () => {
  const component = renderer.create(<CreatingEventPage />);
  const result = component.toJSON();
  expect(result).toMatchSnapshot();
});
