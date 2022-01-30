import { render } from '@testing-library/react';
import { SampleArea } from './SampleArea';

test('Renders SampleArea with provided font size in rems', () => {
    const size = Math.floor(Math.random() * 24); // generate a random number between 0 and 5
    render(<SampleArea fontSize={size} />);
    const textarea = document.querySelector('textarea');
    expect(textarea).toHaveStyle(`font-size : ${size}px`);
});