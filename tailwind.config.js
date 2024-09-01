/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grays-gray-6": "#f2f2f7",
        "grays-white": "#fff",
        "background-opaque-tertiary": "#f4f4f4",
        "opaque-secondary": "#fcfcfc",
        "text-colors-text-primary": "rgba(0, 0, 0, 0.85)",
        "border-brand-default": "#2c2c2c",
        "text-brand-on-brand": "#f5f5f5",
        "fills-emphased-quaternary": "rgba(120, 120, 128, 0.08)",
        darkslategray: "#434343",
        "labels-secondary": "rgba(60, 60, 67, 0.6)",
        "gray-20": "#f0f2f6",
        "gray-60": "#a3a8b8",
        "labels-primary": "#000",
        gray: {
          "100": "#262730",
          "200": "rgba(0, 0, 0, 0.17)",
          "300": "rgba(118, 118, 128, 0.12)",
          "400": "rgba(145, 145, 153, 0.12)",
        },
        "fills-tertiary": "rgba(120, 120, 128, 0.12)",
        "colors-blue": "#007aff",
        "separators-non-opaque": "rgba(84, 84, 86, 0.34)",
        "background-opaque-none": "rgba(255, 255, 255, 0)",
      },
      spacing: {
        "spacing-16": "16px",
        "spacing-24": "24px",
        "space-200": "8px",
        "spacing-8": "8px",
        "spacing-4": "4px",
      },
      fontFamily: {
        "single-line-body-base": "Inter",
        "source-sans-pro": "'Source Sans Pro'",
        "subheadline-emphasized": "'SF Pro'",
        "sf-compact": "'SF Compact'",
        "sf-compact-rounded": "'SF Compact Rounded'",
        "cal-sans": "'Cal Sans'",
        "inter-variable": "'Inter Variable'",
      },
      borderRadius: {
        "7xs-3": "5.3px",
        xl: "20px",
        "980xl": "999px",
        "1313xl": "1332px",
        "13xl": "32px",
        "5xs-1": "7.1px",
        "radius-sm": "12px",
        "radius-l": "24px",
        "inputarea-button-border-radius": "12px",
        "radius-round": "999px",
        "radius-xl": "32px",
      },
    },
    fontSize: {
      smi: "13px",
      base: "16px",
      mini: "15px",
      mid: "17px",
      sm: "14px",
      "lgi-7": "19.7px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
