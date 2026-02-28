import RadioButton from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: { label: 'Radio', disabled: false },
};

export const Disabled = {
  args: { label: 'Radio Disabled', disabled: true },
};