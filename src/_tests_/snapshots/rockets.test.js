import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../../components/rockets/rockets';

describe('Rockets', () => {
  test('should match Rockets snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
