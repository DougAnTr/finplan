import React from 'react';
import AddExpenses from './AddExpenses';
import { render, screen } from '@testing-library/react';

describe('AddExpenses', () => {
    it('should render the form', () => {
        render(<AddExpenses />);

        expect(screen.getByRole('form')).toHaveFormValues({
            description: '',
            price: '',
            type: '',
        });
        expect(screen.getByRole('button')).toHaveTextContent('Salvar despesa');
    });
});
