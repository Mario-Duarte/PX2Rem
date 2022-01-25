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

const pxToPx = useConvertUnits({
    defaultSize: 12,
    size: 16,
    sizeUnit: 'px',
    resultUnit: 'px'
});

const perToRem = useConvertUnits({
    defaultSize: 16,
    size: 200,
    sizeUnit: '%',
    resultUnit: 'rem'
});

const remToPer = useConvertUnits({
    defaultSize: 16,
    size: 2,
    sizeUnit: 'rem',
    resultUnit: '%'
});
const perToPer = useConvertUnits({
    defaultSize: 16,
    size: 200,
    sizeUnit: '%',
    resultUnit: '%'
});

// test to check if it converts Px to Rem
test('It converts px to rem', () => {
    expect(pxToRem).toBe(2);
})

// test to check if it converts Rem to Pc
test('It converts rem to px', () => {
    expect(remToPX).toBe(46);
});

// test to check if it converts Rem to Rem
test('It converts rem to rem', () => {
    expect(remToRem).toBe(2.75);
});

// test to check if it converts Px to Px
test('It converts px to rem', () => {
    expect(pxToPx).toBe(16);
})

// test to check if it converts % to rem
test('It converts px to rem', () => {
    expect(perToRem).toBe(2);
})

// test to check if it converts rem to %
test('It converts px to rem', () => {
    expect(remToPer).toBe(200);
})

// test to check if it converts % to %
test('It converts px to rem', () => {
    expect(perToPer).toBe(200);
})