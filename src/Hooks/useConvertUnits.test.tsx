import useConvertUnits from './useConvertUnits';

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

const pxToPt = useConvertUnits({
    defaultSize: 16,
    size: 16,
    sizeUnit: 'px',
    resultUnit: 'pt'
});

const ptToPx = useConvertUnits({
    defaultSize: 16,
    size: 12,
    sizeUnit: 'pt',
    resultUnit: 'px'
});

const ptToRem = useConvertUnits({
    defaultSize: 16,
    size: 12,
    sizeUnit: 'pt',
    resultUnit: 'rem'
});

const remToPt = useConvertUnits({
    defaultSize: 16,
    size: 16,
    sizeUnit: 'rem',
    resultUnit: 'pt'
});
const perToPt = useConvertUnits({
    defaultSize: 16,
    size: 16,
    sizeUnit: '%',
    resultUnit: 'pt'
});
const ptToPer = useConvertUnits({
    defaultSize: 16,
    size: 16,
    sizeUnit: 'pt',
    resultUnit: '%'
});
const perToPx = useConvertUnits({
    defaultSize: 16,
    size: 16,
    sizeUnit: '%',
    resultUnit: 'px'
});
const pxToPer = useConvertUnits({
    defaultSize: 16,
    size: 16,
    sizeUnit: 'px',
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

// test to check if it converts px to pt
test('It converts px to pt', () => {
    expect(pxToPt).toBe(12);
})

// test to check if it converts pt to px
test('It converts px to pt', () => {
    expect(ptToPx).toBe(16);
})

// test to check if it converts pt to rem
test('It converts pt to rem', () => {
    expect(ptToRem).toBe(1);
})

// test to check if it converts rem to pt
test('It converts pt to rem', () => {
    expect(remToPt).toBe(192);
})

// test to check if it converts % to pt
test('It converts pt to rem', () => {
    expect(perToPt).toBe(1.92);
})

// test to check if it converts pt to %
test('It converts pt to rem', () => {
    expect(ptToPer).toBe(133.3333);
})

// test to check if it converts per to px
test('It converts pt to rem', () => {
    expect(perToPx).toBe(2.56);
})

// test to check if it converts px to %
test('It converts pt to rem', () => {
    expect(pxToPer).toBe(100);
})


