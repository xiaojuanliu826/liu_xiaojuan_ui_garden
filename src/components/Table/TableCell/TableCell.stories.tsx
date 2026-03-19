import TableCell from './TableCell';

const meta = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    value: 'Cell',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    value: 'Cell',
    disabled: true,
  },
};
