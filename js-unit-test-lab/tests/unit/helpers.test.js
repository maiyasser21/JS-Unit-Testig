const { getLicenseValidity, transformArryToString } = require('../../src/helpers/utils');
const it = require('ava').default;
it('transformArryToString returns a string joined with delimiter', t => {
    const array = ['apple', 'banana', 'orange'];
    const delimiter = ',';
    const result = transformArryToString(delimiter, array);
    t.is(result, 'apple,banana,orange');
});


it('transformArryToString throws an error for invalid delimiter', t => {
    const array = ['apple', 'banana', 'orange'];
    const delimiter = 123;
    const error = t.throws(() => {
        transformArryToString(delimiter, array);
    }, { instanceOf: Error });
    t.is(error.message, 'invalid delimeter');
});

it('transformArryToString returns an empty string for empty array', t => {
    const array = [];
    const delimiter = ',';
    const result = transformArryToString(delimiter, array);
    t.is(result, '');
});

it('transformArryToString returns undefined for non-array input', t => {
    const array = 'apple,banana,orange';
    const delimiter = ',';
    const result = transformArryToString(delimiter, array);
    t.is(result, undefined);
});

// hint useFakeTimer
// it("getLicenseValidity", () => {
//     getLicenseValidity()
// })
const it = require('ava');
const lolex = require('lolex'); 


it.beforeEach(t => {
  t.context.clock = lolex.install(); 
});

it.afterEach(t => {
  t.context.clock.uninstall(); 
});

it('returns "valid" when the current year is before 2026', t => {
  t.context.clock.setSystemTime(new Date('2022-01-01')); 

  const result = getLicenseValidity();

  t.is(result, 'valid');
});

it('returns "invalid" when the current year is after 2025', t => {
  t.context.clock.setSystemTime(new Date('2026-01-01')); 

  const result = getLicenseValidity();

  t.is(result, 'invalid');
});




