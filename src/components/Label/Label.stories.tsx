import Label from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    text: 'Label',
    backgroundColor: 'transparent',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Disabled Label',
    backgroundColor: 'transparent',
    disabled: true,
  },
};