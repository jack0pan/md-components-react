module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "var(--md-sys-color-primary)",
        "primary-container": "var(--md-sys-color-primary-container)",
        secondary: "var(--md-sys-color-secondary)",
        "secondary-container": "var(--md-sys-color-secondary-container)",
        tertiary: "var(--md-sys-color-tertiary)",
        "tertiary-container": "var(--md-sys-color-tertiary-container)",
        error: "var(--md-sys-color-error)",
        "error-container": "var(--md-sys-color-error-container)",
        surface: "var(--md-sys-color-surface)",
        "surface-variant": "var(--md-sys-color-surface-variant)",
        outline: "var(--md-sys-color-outline)",
        background: "var(--md-sys-color-background)",
        "on-primary": "var(--md-sys-color-on-primary)",
        "on-primary-container": "var(--md-sys-color-on-primary-container)",
        "on-secondary": "var(--md-sys-color-on-secondary)",
        "on-secondary-container": "var(--md-sys-color-on-secondary-container)",
        "on-tertiary": "var(--md-sys-color-on-tertiary)",
        "on-tertiary-container": "var(--md-sys-color-on-tertiary-container)",
        "on-error": "var(--md-sys-color-on-error)",
        "on-error-container": "var(--md-sys-color-on-error-container)",
        "on-surface": "var(--md-sys-color-on-surface)",
        "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
        "on-background": "var(--md-sys-color-on-background)",
      },
      opacity: {
        8: ".08",
        12: ".12",
        38: ".38",
        hover: "var(--md-sys-state-hover-state-layer-opacity)",
        focus: "var(--md-sys-state-focus-state-layer-opacity)",
        pressed: "var(--md-sys-state-pressed-state-layer-opacity)",
      },
      boxShadow: {
        1: "var(--md-sys-elevation-box-shadow-1)",
        2: "var(--md-sys-elevation-box-shadow-2)",
        3: "var(--md-sys-elevation-box-shadow-3)",
        4: "var(--md-sys-elevation-box-shadow-4)",
        5: "var(--md-sys-elevation-box-shadow-5)",
      },
      dropShadow: {
        1: "var(--md-sys-elevation-drop-shadow-1)",
        2: "var(--md-sys-elevation-drop-shadow-2)",
        3: "var(--md-sys-elevation-drop-shadow-3)",
        4: "var(--md-sys-elevation-drop-shadow-4)",
        5: "var(--md-sys-elevation-drop-shadow-5)",
      },
      fontSize: {
        "display-large": [
          "var(--md-sys-typescale-display-large-size)",
          {
            lineHeight: "var(--md-sys-typescale-display-large-line-height)",
          },
        ],
        "display-medium": [
          "var(--md-sys-typescale-display-medium-size)",
          {
            lineHeight: "var(--md-sys-typescale-display-medium-line-height)",
          },
        ],
        "display-small": [
          "var(--md-sys-typescale-display-small-size)",
          {
            lineHeight: "var(--md-sys-typescale-display-small-line-height)",
          },
        ],
        "headline-large": [
          "var(--md-sys-typescale-headline-large-size)",
          {
            lineHeight: "var(--md-sys-typescale-headline-large-line-height)",
          },
        ],
        "headline-medium": [
          "var(--md-sys-typescale-headline-medium-size)",
          {
            lineHeight: "var(--md-sys-typescale-headline-medium-line-height)",
          },
        ],
        "headline-small": [
          "var(--md-sys-typescale-headline-small-size)",
          {
            lineHeight: "var(--md-sys-typescale-headline-small-line-height)",
          },
        ],
        "title-large": [
          "var(--md-sys-typescale-title-large-size)",
          {
            lineHeight: "var(--md-sys-typescale-title-large-line-height)",
          },
        ],
        "title-medium": [
          "var(--md-sys-typescale-title-medium-size)",
          {
            lineHeight: "var(--md-sys-typescale-title-medium-line-height)",
          },
        ],
        "title-small": [
          "var(--md-sys-typescale-title-small-size)",
          {
            lineHeight: "var(--md-sys-typescale-title-small-line-height)",
          },
        ],
        "label-large": [
          "var(--md-sys-typescale-label-large-size)",
          {
            lineHeight: "var(--md-sys-typescale-label-large-line-height)",
          },
        ],
        "label-medium": [
          "var(--md-sys-typescale-label-medium-size)",
          {
            lineHeight: "var(--md-sys-typescale-label-medium-line-height)",
          },
        ],
        "label-small": [
          "var(--md-sys-typescale-label-small-size)",
          {
            lineHeight: "var(--md-sys-typescale-label-small-line-height)",
          },
        ],
        "body-large": [
          "var(--md-sys-typescale-body-large-size)",
          {
            lineHeight: "var(--md-sys-typescale-body-large-line-height)",
          },
        ],
        "body-medium": [
          "var(--md-sys-typescale-body-medium-size)",
          {
            lineHeight: "var(--md-sys-typescale-body-medium-line-height)",
          },
        ],
        "body-small": [
          "var(--md-sys-typescale-body-small-size)",
          {
            lineHeight: "var(--md-sys-typescale-body-small-line-height)",
          },
        ],
      },
      fontWeight: {
        "display-large": "var(--md-sys-typescale-display-large-weight)",
        "display-medium": "var(--md-sys-typescale-display-medium-weight)",
        "display-small": "var(--md-sys-typescale-display-small-weight)",
        "headline-large": "var(--md-sys-typescale-headline-large-weight)",
        "headline-medium": "var(--md-sys-typescale-headline-medium-weight)",
        "headline-small": "var(--md-sys-typescale-headline-small-weight)",
        "title-large": "var(--md-sys-typescale-title-large-weight)",
        "title-medium": "var(--md-sys-typescale-title-medium-weight)",
        "title-small": "var(--md-sys-typescale-title-small-weight)",
        "label-large": "var(--md-sys-typescale-label-large-weight)",
        "label-medium": "var(--md-sys-typescale-label-medium-weight)",
        "label-small": "var(--md-sys-typescale-label-small-weight)",
        "body-large": "var(--md-sys-typescale-body-large-weight)",
        "body-medium": "var(--md-sys-typescale-body-medium-weight)",
        "body-small": "var(--md-sys-typescale-body-small-weight)",
      },
    },
  },
  plugins: [],
};
