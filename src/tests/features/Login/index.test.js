import { render } from '../../../utils/test-utils';

test('renders login component', () => {
  const { getByText } = render();

  expect(getByText(/Log in to Hedwig/i)).toBeInTheDocument();
});