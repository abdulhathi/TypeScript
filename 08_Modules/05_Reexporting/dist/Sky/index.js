"use strict";
// Option import and export
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackHole = exports.Star = exports.Cloud = void 0;
// import { Cloud } from "./Cloud";
// import { Star } from "./Star";
// import { BlackHole } from "./BlackHole";
// export {Cloud, Star, BlackHole};
// Option import and export in one go Re-export
var Cloud_1 = require("./Cloud");
Object.defineProperty(exports, "Cloud", { enumerable: true, get: function () { return Cloud_1.Cloud; } });
var Star_1 = require("./Star");
Object.defineProperty(exports, "Star", { enumerable: true, get: function () { return Star_1.Star; } });
var BlackHole_1 = require("./BlackHole");
Object.defineProperty(exports, "BlackHole", { enumerable: true, get: function () { return BlackHole_1.BlackHole; } });
