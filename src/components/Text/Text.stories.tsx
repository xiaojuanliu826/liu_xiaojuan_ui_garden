import Text from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    content: 'Sample Text',
    backgroundColor: 'transparent',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    content: 'Disabled Text',
    backgroundColor: 'transparent',
    disabled: true,
  },
};
