import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Click Me',
    backgroundColor: 'blue',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    backgroundColor: 'blue',
    disabled: true,
  },
};
