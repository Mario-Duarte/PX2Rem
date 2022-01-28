import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { units } from '../../Hooks/useConvertUnits';
import { DropDown } from './DropDown';

afterEach(cleanup);

const setup = (onChange:(unit:units) => void) => {
    const util = render(<DropDown defaultValue='px' onChange={onChange} />);
    const input = util.getByLabelText('dropdown-selector') as HTMLSelectElement;
    return { input, ...util }
};

test('Renders DropDown selector', () => {
    const onChangeHandle = (unit:units) => {}
    setup(onChangeHandle);
    
    expect(screen.getByLabelText('dropdown-selector')).toBeInTheDocument();
});

test('On change function called', () => {
    const onChangeMock = jest
    .fn()
    .mockImplementation((unit:units) => { return unit });

    const { input } = setup(onChangeMock);
    fireEvent.change(input, {target: {value: 'rem'}});

    expect(onChangeMock).toHaveBeenCalledWith("rem");
    expect(onChangeMock).toHaveBeenCalledTimes(1);
});