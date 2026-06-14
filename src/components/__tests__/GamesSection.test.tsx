import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import GamesSection from '../GamesSection';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('GamesSection', () => {
  it('renders section heading', () => {
    render(
      <MemoryRouter>
        <GamesSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Choose Your Challenge')).toBeInTheDocument();
  });

  it('renders all topic cards', () => {
    render(
      <MemoryRouter>
        <GamesSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Cricket')).toBeInTheDocument();
    expect(screen.getByText('Football')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Space')).toBeInTheDocument();
    expect(screen.getByText('History')).toBeInTheDocument();
  });

  it('each topic card has an accessible aria-label', () => {
    render(
      <MemoryRouter>
        <GamesSection />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Start Cricket quiz')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Technology quiz')).toBeInTheDocument();
  });
});
