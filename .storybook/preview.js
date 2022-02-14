import theme from './preview-theme';

import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme preferences',
    defaultValue: 'auto',
    toolbar: {
      icon: 'switchalt',
      items: [
        { value: 'auto', right: '⚙️', title: 'Sync with system' },
        { value: 'light', right: '🌞', title: 'Light theme' },
        { value: 'dark', right: '🌛', title: 'Dark theme' },
      ],
    },
  },
};

const withWrapper = (Story, context) => {
  const {
    globals: { theme },
  } = context;
  document.documentElement.setAttribute('data-color-mode', theme);

  return (
    <div style={{ padding: '1rem' }}>
      <Story />
    </div>
  );
};

export const decorators = [withWrapper];
