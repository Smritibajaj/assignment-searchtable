const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const initcolors = {
  brand: {
    primary: {
      blue: "#286EF1",
      red: "#FF3C31",
      green: "#00BC4B",
      yellow: {
        primary: "#F7BF17",
        status: "#FFC700",
      },
      purple: "#A603F2",
      gray: "#515A6E",
      orange: "#FF8A00",
      lightgray: "#9DACB4",
    },
    light: {
      red: "#FFEFEF",
      green: "#E4FFEF",
      orange: "#FFF4E7",
      blue: "#E9F0FF",
      purple: "#FAEEFF",
      gray: "#F8FAFB",
      yellow: "#FFFAE0",
    },
    hover: {
      blue: "#0D4DC6",
    },
    disabled: {
      blue: "#93B6F8",
    },
    text: {
      title: "#17233D",
      primary: "#515A6E",
      placeholder: "#BFC2CA",
    },
    background: {
      white: "#FAFCFE",
      skyblue: "#EDF6FF",
    },
    extra: {
      icon: "#9DACB4",
      divider: "#EBEEF3",
    },
  },
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      dark: "#090E34",
      "dark-700": "#090e34b3",
      primary: "#3056D3",
      secondary: "#13C296",
      "body-color": "#637381",
      warning: "#FBBF24",
      ...initcolors,
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        xxs: '.625rem',
        xxxs: '.5rem',
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
