/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aux: {
          blue: "var(--aux-blue)",
          green: "var(--aux-green)",
          "green-marca": "var(--aux-green-marca)",
          "dark-green": "var(--aux-dark-green)",
          "green-border": "var(--aux-green-border)",
          "yellow-marca": "var(--aux-yellow-marca)",
          cream: "var(--aux-cream-100)",
        },
        blue: {
          400: "#007EE6",
        },
        gray: {
          400: "var(--gray-400)",
        },
      },
      backgroundImage: {
        "footer-pattern": "url('/application/polygons.svg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transition-discrete": {
          "transition-behavior": "allow-discrete",
        },
        ".h-inherit": {
          height: "inherit",
        },
        ".h-unset": {
          height: "unset",
        },
        ".bg-unset": {
          background: "unset",
        },
        ".primary-button": {
          display: "flex",
          "border-radius": "0.375rem",
          border: "1px solid var(--aux-green-marca)",
          background: "var(--aux-green-marca)",
        },
        ".primary-outline-button": {
          display: "flex",
          alignItems: "center",
          "border-radius": "0.375rem",
          border: "1px solid var(--aux-green-marca)",
          background: "transparent",
          "&:hover": {
            color: "white",
            background: "var(--aux-green-marca)",
          },
        },
        ".secondary-button": {
          display: "flex",
          alignItems: "center",
          "border-radius": "0.375rem",
          color: "white",
          background: "1px solid var(--aux-blue)",
        },
        ".primary-heading": {
          "line-height": "126%",
          "font-weight": 800,
          "font-size": "1.5rem",
          "@media (min-width: 1024px)": {
            ".primary-heading": {
              "font-size": "3rem",
            },
          },
        },
        ".text-auto-hyphens": {
          hyphens: "auto",
          "-webkit-hyphens": "auto",
          "-ms-hyphens": "auto",
          lang: "pt-BR",
          "overflow-wrap": "anywhere",
        },
      });
    },
  ],
};
