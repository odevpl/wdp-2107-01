import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog';

describe('Blog', () => {
  it('renders without crashing', () => {
    shallow(<Blog />);
  });
});
