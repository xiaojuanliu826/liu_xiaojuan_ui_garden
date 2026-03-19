import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('TableHeader is visible', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableHeader label="Test" />
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByTestId('tableheader')).toBeVisible();
});

test('TableHeader background changes when disabled', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableHeader label="Test" disabled />
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByTestId('tableheader')).toHaveStyle(
    'background-color: #ccc'
  );
});
