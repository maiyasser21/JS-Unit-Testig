"use strict";

var transformArryToString = function transformArryToString() {
  var delimiter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ',';
  var array = arguments.length > 1 ? arguments[1] : undefined;
  if (typeof delimiter !== 'string') throw new Error('invalid delimeter');
  if (Array.isArray(array) && array.length) return array.join(delimiter);
};

var getLicenseValidity = function getLicenseValidity() {
  if (new Date().getUTCFullYear() >= 2026) {
    return "invalid";
  }

  return "valid";
};

module.exports = {
  transformArryToString: transformArryToString,
  getLicenseValidity: getLicenseValidity
};
//# sourceMappingURL=utils.dev.js.map
