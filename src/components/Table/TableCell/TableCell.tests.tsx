import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('TableCell is visible', () => {
  render(<table><tbody><tr><TableCell value="Test" /></tr></tbody></table>);
  expect(screen.getByTestId('tablecell')).toBeVisible();
});

test('TableCell background changes when disabled', () => {
  render(<table><tbody><tr><TableCell value="Test" disabled /></tr></tbody></table>);
  expect(screen.getByTestId('tablecell')).toHaveStyle('background-color: #eee');
});