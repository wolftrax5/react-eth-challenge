import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = shallow(<Header />);

  test('Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Header title', () => {
    expect(header.dive('.Header-title').length).toEqual(1);
  });
});
