// __tests__/ClassCard.test.tsx
import { render, screen } from '@testing-library/react';
import ClassCard from '@/features/classCard/ClassCard';
import '@testing-library/jest-dom';

describe('ClassCard', () => {
  test('renders ClassCard with correct content', () => {
    render(<ClassCard />);

    // Check if the title is rendered
    expect(screen.getByText('R&Deploy Your Own Bot Workshop')).toBeInTheDocument();

    // Check if host names are rendered
    expect(screen.getByText('La Salle Computer Society')).toBeInTheDocument();
    expect(screen.getByText('College of Computer Studies')).toBeInTheDocument();

    // Check if class details are rendered
    expect(screen.getByText('Wednesday, June 26, 2025')).toBeInTheDocument();
    expect(screen.getByText('1:00 PM - 3:30 PM')).toBeInTheDocument();
    expect(screen.getByText('Online (Zoom)')).toBeInTheDocument();

    // Check if class description is rendered
    expect(screen.getByText(/Lorem ipsum dolor sit/)).toBeInTheDocument();

    // Check if the "Join Now - Free" button is rendered
    expect(screen.getByText('Join Now - Free')).toBeInTheDocument();

    // Check if the slots left text is rendered
    expect(screen.getByText('Only 22 slots left!')).toBeInTheDocument();
  });
});
