"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = exports.colorCode = void 0;
var colorCode = function (color) {
    switch (color) {
        case "black":
            return 0;
        case "browm":
            return 1;
        case "red":
            return 2;
        case "orange":
            return 3;
        case "yellow":
            return 4;
        case "green":
            return 5;
        case "blue":
            return 6;
        case "violet":
            return 7;
        case "grey":
            return 8;
        case "white":
            return 9;
        default:
            throw new Error('color no valido');
    }
};
exports.colorCode = colorCode;
exports.COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
];
console.log((0, exports.colorCode)("orange"));
