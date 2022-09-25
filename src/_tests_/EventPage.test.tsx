import * as React from 'react';
import EventPage from '../pages/EventPage';
import renderer from 'react-test-renderer';

it('EventPage renders correctly', () => {
  const component = renderer.create(<EventPage />);
  const result = component.toJSON();
  expect(result).toMatchSnapshot();
});
