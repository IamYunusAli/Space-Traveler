import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Dragons from '../../components/dragons/dragons';
import store from '../../redux/configureStore';

test('should match Caculator snapshot', () => {
  const tree = render(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
