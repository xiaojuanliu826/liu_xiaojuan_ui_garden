import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button label="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('Button disabled state changes background', () => {
  render(<Button label="Test" disabled />);
  expect(screen.getByText('Test')).toHaveStyle('background-color: grey');
});