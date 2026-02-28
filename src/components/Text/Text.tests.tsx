import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text is visible', () => {
  render(<Text content="Hello" />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});

test('Text disabled state changes background', () => {
  render(<Text content="Hello" disabled />);
  expect(screen.getByText('Hello')).toHaveStyle('background-color: grey');
});