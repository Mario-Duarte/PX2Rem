import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { DefaultSizeInput } from './DefaultSizeInput';

afterEach(cleanup);

const setup = (onChange:(size:number) => void) => {
    const util = render(<DefaultSizeInput onChange={onChange} />);
    const input = util.getByLabelText('defaultSize') as HTMLInputElement;
    return { input, ...util }
};

test('Renders DefaultSizeInput section', () => {
    const onChangeHandle = (size:number) => {}
    setup(onChangeHandle);
    
    expect(screen.getByText('default font-size', {exact: false})).toBeInTheDocument();
});

test('Sets default value to number', () => {
    const onChangeHandle = (size:number) => {}
    const { input } = setup(onChangeHandle);

    fireEvent.change(input, {target: {value: '8'}});

    expect(input.value).toBe("8");
});

test('On change function called', () => {
    const onChangeMock = jest
    .fn()
    .mockImplementation((size:number) => { return size });

    const { input } = setup(onChangeMock);
    fireEvent.change(input, {target: {value: '8'}});

    expect(onChangeMock).toHaveBeenCalledWith(8);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
});