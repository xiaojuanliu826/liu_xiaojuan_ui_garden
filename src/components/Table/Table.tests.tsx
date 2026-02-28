import { render, screen } from '@testing-library/react';
import Table from './Table';

test('Table is visible', () => {
  render(<Table><tbody /></Table>);
  expect(screen.getByTestId('table')).toBeVisible();
});

test('Table background changes when disabled', () => {
  render(<Table disabled><tbody /></Table>);
  expect(screen.getByTestId('table')).toHaveStyle('background-color: #ccc');
});