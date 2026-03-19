import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton visible', () => {
  render(<RadioButton label="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('RadioButton disabled background', () => {
  render(<RadioButton label="Test" disabled />);
  expect(screen.getByText('Test')).toHaveStyle('background-color: grey');
});
