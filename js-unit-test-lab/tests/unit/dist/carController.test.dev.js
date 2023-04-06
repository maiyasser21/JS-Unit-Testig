"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("../../src/controllers/carController"),
    updateCar = _require.updateCar;

var it = require("ava")["default"];

it("should update an added car", function _callee(t) {
  var car, addedCar, newPrice, updatedCar;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          car = {
            title: "Audi Q7",
            tags: "SUV, luxury",
            price: 80000,
            age: 3
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(addCar(car));

        case 3:
          addedCar = _context.sent;
          newPrice = 85000;
          _context.next = 7;
          return regeneratorRuntime.awrap(updateCar(_objectSpread({}, addedCar, {
            price: newPrice
          })));

        case 7:
          updatedCar = _context.sent;
          t.is(updatedCar.price, newPrice);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
//# sourceMappingURL=carController.test.dev.js.map
