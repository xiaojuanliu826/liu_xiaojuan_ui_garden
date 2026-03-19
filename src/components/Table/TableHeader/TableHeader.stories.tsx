import TableHeader from './TableHeader';

const meta = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Header',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Header',
    disabled: true,
  },
};
