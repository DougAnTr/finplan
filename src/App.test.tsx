import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('App', function () {
    it('renders successfully', () => {
        render(<App />);
    });
});
