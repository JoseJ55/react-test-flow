import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import User from './User';

describe('basic testing', () => {
    it('should render text', () => {
        const name = 'John';
        
        render(<User name={name} />);

        const header = screen.getByText(name);
        expect (header).toBeInTheDocument();
    });
});
