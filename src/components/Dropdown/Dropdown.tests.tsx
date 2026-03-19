import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  render(<Dropdown options={['A']} />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('Dropdown disabled background', () => {
  render(<Dropdown options={['A']} disabled />);
  expect(screen.getByRole('combobox')).toHaveStyle('background-color: grey');
});
