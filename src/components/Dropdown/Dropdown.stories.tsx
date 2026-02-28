import Dropdown from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    options: ['Option 1', 'Option 2'],
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ['Option 1', 'Option 2'],
    disabled: true,
  },
};