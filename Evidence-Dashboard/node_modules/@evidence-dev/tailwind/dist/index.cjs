var $3iSxC$tailwindcssdefaultTheme = require("tailwindcss/defaultTheme");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "colors", () => $91d8cb74e04bdebe$export$8f45430ccf837300);
$parcel$export(module.exports, "config", () => $91d8cb74e04bdebe$export$e506a1d27d1eaa20);
$parcel$export(module.exports, "default", () => $91d8cb74e04bdebe$export$2e2bcd8739ae039);
const $91d8cb74e04bdebe$export$8f45430ccf837300 = {
    color: {
        1: "#923d59",
        2: "#488f96",
        3: "#518eca",
        4: "#B3A9A0",
        5: "#3F6C51",
        6: "#ffc857",
        7: "#495867",
        8: "#bfdbf7",
        9: "#bc4749",
        10: "#EEEBD0",
        11: "#F68E5F",
        12: "#923d59",
        13: "#488f96",
        14: "#518eca",
        15: "#B3A9A0",
        16: "#3F6C51",
        17: "#ffc857",
        18: "#495867",
        19: "#bfdbf7",
        20: "#bc4749"
    }
};

const $91d8cb74e04bdebe$export$e506a1d27d1eaa20 = {
    theme: {
        extend: {
            colors: $91d8cb74e04bdebe$export$8f45430ccf837300,
            fontFamily: {
                sans: [
                    `Inter, ${$3iSxC$tailwindcssdefaultTheme.fontFamily.sans}`,
                    {
                        // open fours by default
                        fontFeatureSettings: '"cv02"'
                    }
                ],
                serif: [
                    `Spectral, ${$3iSxC$tailwindcssdefaultTheme.fontFamily.serif}`,
                    {
                        // proportional oldstyle figures by default
                        fontFeatureSettings: '"pnum", "onum"'
                    }
                ]
            },
            textShadow: {
                DEFAULT: "1px solid var(--tw-shadow-color)"
            },
            gridTemplateRows: {
                auto: "auto"
            },
            listStyleType: {
                circle: "circle",
                square: "square",
                "lower-alpha": "lower-alpha",
                "lower-roman": "lower-roman"
            }
        },
        plugins: []
    }
};
var $91d8cb74e04bdebe$export$2e2bcd8739ae039 = $91d8cb74e04bdebe$export$e506a1d27d1eaa20;


//# sourceMappingURL=index.cjs.map
