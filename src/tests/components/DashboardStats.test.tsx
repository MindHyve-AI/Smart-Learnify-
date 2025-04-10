import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DashboardStats from '@/components/dashboard/DashboardStats';

describe('DashboardStats', () => {
  it('renders dashboard stat cards', () => {
    render(<DashboardStats />);
    
    // Check if all stat cards are rendered
    expect(screen.getByText('Total Courses')).toBeInTheDocument();
    expect(screen.getByText('Completed Topics')).toBeInTheDocument();
    expect(screen.getByText('Study Hours')).toBeInTheDocument();
    expect(screen.getByText('Community Rank')).toBeInTheDocument();
    
    // Check if the stat values are displayed
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('64')).toBeInTheDocument();
    expect(screen.getByText('28.5')).toBeInTheDocument();
    expect(screen.getByText('87')).toBeInTheDocument();
  });
}); 