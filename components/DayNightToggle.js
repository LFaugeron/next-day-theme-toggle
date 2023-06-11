"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index.css"));

var _dune = _interopRequireDefault(require("../assets/dune.png"));

var _cactus = _interopRequireDefault(require("../assets/cactus.png"));

var _moon = _interopRequireDefault(require("../assets/moon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DayNightToggle = function DayNightToggle(_ref) {
    var _ref$style = _ref.style,
        style = _ref$style === void 0 ? "classic" : _ref$style,
        theme = _ref.theme,
        setTheme = _ref.setTheme;

    function changeTheme() {
        setTheme(!theme);
    }

    if (style === "classic") {
        return /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "theme yellow" : "theme dark",
            onClick: changeTheme
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "arc le" : "arc ri"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "arc deux lee" : "arc deux rii"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "arc trois leee" : "arc trois riii"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "sun left" : "sun right hidden"
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "moon hidde" : "moon"
        })), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid one" : "stars one"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid two" : "stars two"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid three" : "stars three"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid four" : "stars four"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid five" : "stars five"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "cloud o" : "cloud o hidd"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "cloud t" : "cloud t hidd"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "cloud th" : "cloud th hidd"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "cloud f" : "cloud f hidd"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "cloud fi" : "cloud fi hidd"
        }));
    } else if (style === "desert") {
        return /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "theme desert" : "theme desertdark",
            onClick: changeTheme
        }, /*#__PURE__*/_react.default.createElement("img", {
            src: _dune.default,
            alt: "dune",
            className: !theme ? "img" : "img deserthid"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _dune.default,
            alt: "dune",
            className: !theme ? "imgdark desertdarkhid" : "imgdark"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _cactus.default,
            alt: "cactus",
            className: !theme ? "cactus" : "cactus deserthidde"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _cactus.default,
            alt: "cactus",
            className: !theme ? "cactus second" : "cactus second deserthidden"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _cactus.default,
            alt: "cactus",
            className: !theme ? "cactusdark desertdarkhidden" : "cactusdark"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _cactus.default,
            alt: "cactus",
            className: !theme ? "cactusdark sec desertdarkhidde" : "cactusdark sec"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "arc le" : "arc ri"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "arc deux lee" : "arc deux rii"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "arc trois leee" : "arc trois riii"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "sun desertsun left" : "sun desertsun right hidden"
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "moondesert hidde" : "moondesert"
        })), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid one" : "stars one"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid two" : "stars two"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid three" : "stars three"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid four" : "stars four"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "stars hid five" : "stars five"
        }));
    } else if (style === "minimalist") {
        return /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "theme white" : "theme dark",
            onClick: changeTheme
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "sunicon left" : "sunicon right"
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: "relativeparent"
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "suniconcenter" : "suniconcenter minimalistehidden"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "un"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "deux"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "trois"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "quatre"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "cinq"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "six"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "sept"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle" : "triangle minimalistehidden",
            id: "huit"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _moon.default,
            alt: "moon",
            className: !theme ? "moonimg minimalistehidden" : "moonimg"
        }))));
    } else if (style === "second_minimalist") {
        return /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "theme white" : "theme dark",
            onClick: changeTheme
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "sunicon left dark" : "sunicon right white"
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: "relativeparent"
        }, /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "suniconcenter white" : "suniconcenter white    minimalistehidden"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "un"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "deux"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "trois"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "quatre"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "cinq"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "six"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "sept"
        }), /*#__PURE__*/_react.default.createElement("div", {
            className: !theme ? "triangle white" : "triangle white minimalistehidden",
            id: "huit"
        }), /*#__PURE__*/_react.default.createElement("img", {
            src: _moon.default,
            alt: "moon",
            className: !theme ? "moonimg minimalistehidden" : "moonimg"
        }))));
    } else {
        return null;
    }
};

var _default = DayNightToggle;
exports.default = _default;
