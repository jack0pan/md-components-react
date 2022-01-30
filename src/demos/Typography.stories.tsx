import * as React from 'react';
import { TypographyPage } from './TypographyPage';

import './Typography.stories.css';

const meta = {
  title: 'Styles/Typography',
  parameters: {
    docs: {
      page: TypographyPage,
    },
  },
};

export const Display = () => (
  <div className="typography-demo">
    <span className="text-display-large font-display-large">Display Large - Roboto 57/64 . 0</span>
    <span className="text-display-medium font-display-medium">
      Display Medium - Roboto 45/52 . 0
    </span>
    <span className="text-display-small font-display-small">Display Small - Roboto 36/44 . 0</span>
  </div>
);

export const Headline = () => (
  <div className="typography-demo">
    <span className="text-headline-large font-headline-large">
      Headline Large - Roboto 32/40 . 0
    </span>
    <span className="text-headline-medium font-headline-medium">
      Headline Medium - Roboto 28/36 . 0
    </span>
    <span className="text-headline-small font-headline-small">
      Headline Small - Roboto 24/32 . 0
    </span>
  </div>
);

export const Title = () => (
  <div className="typography-demo">
    <span className="typography-demo__title">Android + Web</span>
    <span className="text-title-large font-title-large">Title Large - Roboto Medium 22/28 . 0</span>
    <span className="text-title-medium font-title-medium">
      Title Medium - Roboto Medium 16/24 . +0.15
    </span>
    <span className="text-title-small font-title-small">
      Title Small - Roboto Medium 14/20 . +0.1
    </span>
  </div>
);

export const Label = () => (
  <div className="typography-demo">
    <span className="typography-demo__title">Android + Web</span>
    <span className="text-label-large font-label-large">
      Label Large - Roboto Medium 14/20 . +0.1
    </span>
    <span className="text-label-medium font-label-medium">
      Label Medium - Roboto Medium 12/16 . +0.5
    </span>
    <span className="text-label-small font-label-small">
      Label Small - Roboto Medium 11/16 . +0.5
    </span>
  </div>
);

export const Body = () => (
  <div className="typography-demo">
    <span className="typography-demo__title">Android + Web</span>
    <span className="text-body-large font-body-large">Body Large - Roboto 16/24 . +0.15</span>
    <span className="text-body-medium font-body-medium">Body Medium - Roboto 14/20 . +0.25</span>
    <span className="text-body-small font-body-small">Body Small - Roboto 12/16 . +0.4</span>
  </div>
);

export default meta;
