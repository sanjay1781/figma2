/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#0d3451",
        slategray: "rgba(91, 106, 128, 0.28)",
        gray: { "100": "#0b2447", "200": "rgba(0, 0, 0, 0.37)" },
        black: "#000",
        lavender: "#e2edff",
        darkslateblue: "#3062ad",
        lightblue: "#a5d7e8",
      },
      fontFamily: {
        inter: "Inter",
        jost: "Jost",
        "dm-serif-text": "'DM Serif Text'",
      },
      borderRadius: { "xs-1": "11.1px", "2xs-4": "10.4px", "7xs-2": "5.2px" },
    },
    fontSize: {
      "8xl-8": "27.8px",
      "base-6": "15.6px",
      "21xl-1": "40.1px",
      "7xl": "26px",
      "18xl-4": "37.4px",
      "mini-5": "14.5px",
    },
  },
  corePlugins: { preflight: false },
};
