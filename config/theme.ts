import type { ThemeConfig } from '@docusaurus/types';

const themeConfig: ThemeConfig = {
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: true,
    respectPrefersColorScheme: false,
  },
  navbar: {
    title: "King's Church Cambridge",
    items: [],
  },
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 4,
  },
};

export default themeConfig;
