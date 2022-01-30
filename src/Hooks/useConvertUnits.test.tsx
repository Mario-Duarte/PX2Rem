import useConvertUnits from './useConvertUnits';

// =========================
// PX 2 REM
// test to check if it converts rx to rem
test('It converts px to rem', () => {
    expect(useConvertUnits({
        defaultSize: 12,
        size: 24,
        sizeUnit: 'px',
        resultUnit: 'rem'
    })).toBe(2);
});

// =========================
// REM 2 PX
// test to check if it converts rem to px
test('It converts rem to px', () => {
    expect(useConvertUnits({
        defaultSize: 16,
        size: 2.875,
        sizeUnit: 'rem',
        resultUnit: 'px'
    })).toBe(46);
});

// =========================
// REM 2 REM
// test to check if it converts rem to rem
test('It converts rem to rem', () => {
    expect(useConvertUnits({
        defaultSize: 16,
        size: 2.75,
        sizeUnit: 'rem',
        resultUnit: 'rem'
    })).toBe(2.75);
});

// =========================
// PX 2 PX
// test to check if it converts Px to Px
test('It converts px to px', () => {
    expect(useConvertUnits({
        defaultSize: 12,
        size: 16,
        sizeUnit: 'px',
        resultUnit: 'px'
    })).toBe(16);
});

// =========================
// % 2 REM
// test to check if it converts % to rem
test('It converts % to rem', () => {
    expect(useConvertUnits({
        defaultSize: 10,
        size: 25,
        sizeUnit: '%',
        resultUnit: 'rem'
    })).toBe(0.25);
});

// =========================
// REM 2 %
// test to check if it converts rem to %
test('It converts rem to %', () => {
    expect(useConvertUnits({
        defaultSize: 14,
        size: 1.875,
        sizeUnit: 'rem',
        resultUnit: '%'
    })).toBe(187.5);
});

// =========================
// % 2 %
// test to check if it converts % to %
test('It converts % to %', () => {
    expect(useConvertUnits({
        defaultSize: 16,
        size: 120,
        sizeUnit: '%',
        resultUnit: '%'
    })).toBe(120);
})

// =========================
// PX 2 PT
// test to check if it converts px to pt
test('It converts px to pt', () => {
    expect(useConvertUnits({
        defaultSize: 18,
        size: 20,
        sizeUnit: 'px',
        resultUnit: 'pt'
    })).toBe(15);
})

// =========================
// PT 2 PX
// test to check if it converts px to pt
test('It converts pt to px', () => {
    expect(useConvertUnits({
        defaultSize: 16,
        size: 25,
        sizeUnit: 'pt',
        resultUnit: 'px'
    })).toBe(33.333);
})

// =========================
// PT 2 REM
// test to check if it converts pt to rem
test('It converts pt to rem', () => {
    expect(useConvertUnits({
        defaultSize: 12,
        size: 20,
        sizeUnit: 'pt',
        resultUnit: 'rem'
    })).toBe(2.222);
});

// =========================
// REM 2 PT
// test to check if it converts rem to pt
test('It converts rem to pt', () => {
    expect(useConvertUnits({
        defaultSize: 14,
        size: 2,
        sizeUnit: 'rem',
        resultUnit: 'pt'
    })).toBe(21);
});

// =========================
// % 2 PT
// test to check if it converts % to pt
test('It converts % to pt', () => {
    expect(useConvertUnits({
        defaultSize: 18,
        size: 24,
        sizeUnit: '%',
        resultUnit: 'pt'
    })).toBe(3.24);
});

// =========================
// PT 2 %
// test to check if it converts pt to %
test('It converts pt to %', () => {
    expect(useConvertUnits({
        defaultSize: 14,
        size: 16,
        sizeUnit: 'pt',
        resultUnit: '%'
    })).toBe(152.381);
});

// =========================
// % 2 PX
// test to check if it converts per to px
test('It converts % to px', () => {
    expect(useConvertUnits({
        defaultSize: 18,
        size: 22,
        sizeUnit: '%',
        resultUnit: 'px'
    })).toBe(3.96);
})

// =========================
// PX 2 %
// test to check if it converts px to %
test('It converts px to %', () => {
    expect(useConvertUnits({
        defaultSize: 10,
        size: 18,
        sizeUnit: 'px',
        resultUnit: '%'
    })).toBe(180);
})