import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';
import TableCell from '../TableCell/TableCell';

test('TableRow is visible', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <TableCell value="Test" />
        </TableRow>
      </tbody>
    </table>
  );
  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('TableRow changes color when disabled', () => {
  render(
    <table>
      <tbody>
        <TableRow disabled>
          <TableCell value="Test" />
        </TableRow>
      </tbody>
    </table>
  );
  expect(screen.getByText('Test').parentElement).toHaveStyle(
    'background-color: #eee'
  );
});
