module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerColor: "#38BDF8",
        subjectColor: "#E2E8F0",
        contentColor: "#94A3B8",
        bgcolorColor: "#1E293B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
