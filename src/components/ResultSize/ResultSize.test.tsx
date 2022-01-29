import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ResultSize } from './ResultSize'; 

afterEach(cleanup);

const setup = (result:number) => {
    const util = render(<ResultSize result={result} />);
    const input = util.getByLabelText('resultSize') as HTMLInputElement;
    return { input, ...util }
};

test('Renders DropDown selector', () => {
    setup(2.875);
    expect(screen.getByLabelText('resultSize')).toBeInTheDocument();
});

test('Sets result value to number', () => {
    const { input } = setup(3.75);
    expect(input.value).toBe("3.75");
});