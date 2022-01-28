import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { InputSize } from './InputSize'; 

afterEach(cleanup);

const setup = (onChange:(size:number) => void) => {
    const util = render(<InputSize value={16} onChange={onChange} />);
    const input = util.getByLabelText('convertSize') as HTMLInputElement;
    return { input, ...util }
};

test('Renders DropDown selector', () => {
    const onChangeHandle = (size:number) => {}
    setup(onChangeHandle);

    expect(screen.getByLabelText('convertSize')).toBeInTheDocument();
});

test('Sets default value to number', () => {
    const onChangeHandle = (size:number) => {}
    const { input } = setup(onChangeHandle);

    fireEvent.change(input, {target: {value: '16'}});

    expect(input.value).toBe("16");
});

test('On change function called', () => {
    const onChangeMock = jest
    .fn()
    .mockImplementation((size:number) => { return size });

    const { input } = setup(onChangeMock);
    fireEvent.change(input, {target: {value: '32'}});

    expect(onChangeMock).toHaveBeenCalledWith(32);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
});