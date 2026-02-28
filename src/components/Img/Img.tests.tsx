import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img is visible', () => {
  render(<Img src="test.jpg" alt="Test Image" />);
  expect(screen.getByAltText('Test Image')).toBeInTheDocument();
});

test('Img disabled state reduces opacity', () => {
  render(<Img src="test.jpg" alt="Test Image" disabled />);
  expect(screen.getByAltText('Test Image')).toHaveStyle('opacity: 0.5');
});