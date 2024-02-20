// write the unit test for the Greet component
import { render, screen } from '@testing-library/react';
import { Greet } from './components/Greet';

test('Greet component', () => {
  render(<Greet name="to All" messageCount={10} isLoggedIn={false} />);
  const greetElement = screen.getByText(/welcome/i);
  expect(greetElement).toBeInTheDocument();
});

