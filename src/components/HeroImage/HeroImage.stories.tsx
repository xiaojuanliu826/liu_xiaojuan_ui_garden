import HeroImage from './HeroImage';

const meta = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    overlayText: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero image',
    overlayText: 'Welcome!',
    backgroundColor: 'rgba(0,0,0,0.6)',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    alt: 'Hero image',
    overlayText: 'Disabled',
    backgroundColor: 'rgba(0,0,0,0.6)',
    disabled: true,
  },
};