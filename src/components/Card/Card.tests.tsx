import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card visible', () => {
  render(<Card>Test</Card>);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('Card disabled background', () => {
  render(<Card disabled>Test</Card>);
  expect(screen.getByText('Test')).toHaveStyle('background-color: grey');
});