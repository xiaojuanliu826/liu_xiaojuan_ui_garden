import TableRow from './TableRow';
import TableCell from '../TableCell/TableCell';

type TableRowArgs = {
  disabled: boolean;
};

const meta = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    disabled: false,
  },
  render: (args: TableRowArgs) => (
    <table>
      <tbody>
        <TableRow disabled={args.disabled}>
          <TableCell value="Alice" />
          <TableCell value="22" />
        </TableRow>
      </tbody>
    </table>
  ),
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args: TableRowArgs) => <Default.render {...args} />,
};
