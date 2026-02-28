import Img from './Img';

const meta = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder',
    disabled: true,
  },
};