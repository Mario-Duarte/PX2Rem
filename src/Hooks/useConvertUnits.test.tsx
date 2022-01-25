import useConvertUnits, { units } from './useConvertUnits';

const pxToRem = useConvertUnits({
    defaultSize: 12,
    size: 24,
    sizeUnit: 'px',
    resultUnit: 'rem'
});

const remToPX = useConvertUnits({
    defaultSize: 16,
    size: 2.875,
    sizeUnit: 'rem',
    resultUnit: 'px'
});

const remToRem = useConvertUnits({
    defaultSize: 16,
    size: 2.75,
    sizeUnit: 'rem',
    resultUnit: 'rem'
});

test('It converts px to rem', () => {
    expect(pxToRem).toBe(2);
})

test('It converts rem to px', () => {
    expect(remToPX).toBe(46);
});

test('It converts rem to rem', () => {
    expect(remToRem).toBe(2.75);
});