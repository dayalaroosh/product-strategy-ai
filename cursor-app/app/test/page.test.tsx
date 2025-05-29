/**
 * @jest-environment jsdom
 */
'use client';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestPage from './page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

describe('TestPage', () => {
  it('renders typography elements correctly', () => {
    render(<TestPage />);
    const heading = screen.getByRole('heading', { name: /Typography Test/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders form elements correctly', () => {
    render(<TestPage />);
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
}); 