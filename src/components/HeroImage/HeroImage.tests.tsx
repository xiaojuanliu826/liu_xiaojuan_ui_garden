import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('HeroImage is visible', () => {
  render(<HeroImage src="img.jpg" alt="test" />);
  expect(screen.getByTestId('heroimage')).toBeVisible();
});

test('HeroImage opacity changes when disabled', () => {
  render(<HeroImage src="img.jpg" alt="test" disabled />);
  const element = screen.getByTestId('heroimage');
  expect(element).toHaveStyle('opacity: 0.5');
});
