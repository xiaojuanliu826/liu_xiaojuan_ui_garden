import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label text="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('Label disabled state changes background', () => {
  render(<Label text="Test" disabled />);
  expect(screen.getByText('Test')).toHaveStyle('background-color: grey');
});
