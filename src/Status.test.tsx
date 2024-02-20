import { render, screen } from '@testing-library/react';
import { Status } from './components/Status';

test('should render correct status message for loading', () => {
  render(<Status status="loading" />);
  const statusElement = screen.getByText(/loading/i);
  expect(statusElement).toBeInTheDocument();
});


test('should render correct status message for success', () => {
  render(<Status status="success" />);
  const statusElement = screen.getByText(/Data fetched successfully/i);
  expect(statusElement).toBeInTheDocument();
});

test('should render correct status message for Error', () => {
    render(<Status status="error" />);
    const statusElement = screen.getByText(/Error fetching data/i);
    expect(statusElement).toBeInTheDocument();
  });