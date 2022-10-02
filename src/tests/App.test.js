import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders Surreal Estate title', () => {
  render(<App />);
  const title = screen.getByText(/surreal estate/i);
  expect(title).toBeInTheDocument();
});
