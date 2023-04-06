"use strict";

var _require = require('../../src/helpers/utils'),
    getLicenseValidity = _require.getLicenseValidity,
    transformArryToString = _require.transformArryToString;

var it = require('ava')["default"];

it('transformArryToString returns a string joined with delimiter', function (t) {
  var array = ['apple', 'banana', 'orange'];
  var delimiter = ',';
  var result = transformArryToString(delimiter, array);
  t.is(result, 'apple,banana,orange');
}); // Negative scenario tests

it('transformArryToString throws an error for invalid delimiter', function (t) {
  var array = ['apple', 'banana', 'orange'];
  var delimiter = 123;
  var error = t["throws"](function () {
    transformArryToString(delimiter, array);
  }, {
    instanceOf: Error
  });
  t.is(error.message, 'invalid delimeter');
});
it('transformArryToString returns an empty string for empty array', function (t) {
  var array = [];
  var delimiter = ',';
  var result = transformArryToString(delimiter, array);
  t.is(result, '');
});
it('transformArryToString returns undefined for non-array input', function (t) {
  var array = 'apple,banana,orange';
  var delimiter = ',';
  var result = transformArryToString(delimiter, array);
  t.is(result, undefined);
}); // hint useFakeTimer
// it("getLicenseValidity", () => {
//     getLicenseValidity()
// })

var test = require('ava');

var lolex = require('lolex');

test.beforeEach(function (t) {
  t.context.clock = lolex.install();
});
test.afterEach(function (t) {
  t.context.clock.uninstall();
});
test('returns "valid" when the current year is before 2026', function (t) {
  t.context.clock.setSystemTime(new Date('2022-01-01'));
  var result = getLicenseValidity();
  t.is(result, 'valid');
});
test('returns "invalid" when the current year is after 2025', function (t) {
  t.context.clock.setSystemTime(new Date('2026-01-01'));
  var result = getLicenseValidity();
  t.is(result, 'invalid');
});
//# sourceMappingURL=helpers.test.dev.js.map
