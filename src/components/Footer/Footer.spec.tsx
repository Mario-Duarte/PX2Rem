import { render } from '@testing-library/react';
import { Footer } from './Footer';

test('Opens Mario website in new browser', () => {
    render(<Footer />); 
    const links = document.querySelectorAll('a');
    expect(links[0]?.getAttribute('href')).toBe('https://www.marioduarte.co.uk/');
    expect(links[0]?.getAttribute('target')).toBe('_blank');
});

test('Opens Alex website in new browser', () => {
    render(<Footer />); 
    const links = document.querySelectorAll('a');
    expect(links[1]?.getAttribute('href')).toBe('https://aleex-caires-portfolio.vercel.app/');
    expect(links[1]?.getAttribute('target')).toBe('_blank');
});