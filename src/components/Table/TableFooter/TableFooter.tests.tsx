import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('TableFooter is visible', () => {
  render(<table><tbody><tr><TableFooter label="Test" /></tr></tbody></table>);
  expect(screen.getByTestId('tablefooter')).toBeVisible();
});

test('TableFooter background changes when disabled', () => {
  render(<table><tbody><tr><TableFooter label="Test" disabled /></tr></tbody></table>);
  expect(screen.getByTestId('tablefooter')).toHaveStyle('background-color: #ccc');
});