module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--md-sys-color-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        secondary: 'var(--md-sys-color-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        tertiary: 'var(--md-sys-color-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        surface: 'var(--md-sys-color-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        outline: 'var(--md-sys-color-outline)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
      },
      opacity: {
        8: '.08',
        12: '.12',
        38: '.38',
        hover: 'var(--md-sys-state-hover-state-layer-opacity)',
        focus: 'var(--md-sys-state-focus-state-layer-opacity)',
        pressed: 'var(--md-sys-state-pressed-state-layer-opacity)',
      },
      boxShadow: {
        1: 'var(--md-sys-elevation-box-shadow-1)',
        2: 'var(--md-sys-elevation-box-shadow-2)',
        3: 'var(--md-sys-elevation-box-shadow-3)',
        4: 'var(--md-sys-elevation-box-shadow-4)',
        5: 'var(--md-sys-elevation-box-shadow-5)',
      },
      dropShadow: {
        1: 'var(--md-sys-elevation-drop-shadow-1)',
        2: 'var(--md-sys-elevation-drop-shadow-2)',
        3: 'var(--md-sys-elevation-drop-shadow-3)',
        4: 'var(--md-sys-elevation-drop-shadow-4)',
        5: 'var(--md-sys-elevation-drop-shadow-5)',
      },
      fontSize: {
        'label-large': [
          'var(--md-sys-typescale-label-large-size)',
          {
            lineHeight: 'var(--md-sys-typescale-label-large-line-height)',
          },
        ],
      },
      fontWeight: {
        'label-large': 'var(--md-sys-typescale-label-large-weight)',
      },
    },
  },
  plugins: [],
};
