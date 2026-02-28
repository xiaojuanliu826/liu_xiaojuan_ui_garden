import TableFooter from './TableFooter';

const meta = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    colSpan: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Footer',
    colSpan: 2,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Footer',
    colSpan: 2,
    disabled: true,
  },
};