import { render, screen } from '@testing-library/react';
import ClassCard from '@/features/classCard/ClassCard';
import '@testing-library/jest-dom';

describe('ClassCard', () => {
  it('renders ClassCard with correct content', () => {
    render(<ClassCard />);

    // Check if the title is rendered
  });
});
