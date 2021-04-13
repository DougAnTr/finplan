import React from 'react';
import Expenses from './Expenses';
import { render, screen } from '@testing-library/react';

describe('Expenses', () => {
  it('should load', () => {
    render(<Expenses />);
  });

  it('get expense description', () => {
    render(<Expenses />);

    expect(screen.getByRole('form')).toHaveFormValues({
      description: '',
      price: '',
      type: '',
    });
  });
});
