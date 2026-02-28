import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Card Content',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    children: 'Disabled Card',
    disabled: true,
  },
};