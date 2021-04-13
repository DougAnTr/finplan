import React from 'react';
import Expenses from './Expenses';
import { render, screen } from '@testing-library/react';

describe('Expenses', () => {
    it('', () => {
        render(<Expenses />);

        expect(screen.getByRole('heading')).toHaveTextContent('Despesas');
    });
});
