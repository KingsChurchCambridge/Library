import type { Config } from '@docusaurus/types';

import plugins from './config/plugins';
import presets from './config/presets';
import themeConfig from './config/theme';

const config: Config = {
  title: "Library | King's Church Cambridge",
  favicon: 'favicon.ico',
  url: process.env.CI
    ? 'https://kingschurchcambridge.github.io/Library/'
    : 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  markdown: { format: 'mdx' },
  plugins,
  presets,
  themeConfig,
  organizationName: 'KingsChurchCambridge',
  projectName: 'Library',
  deploymentBranch: 'main',
};

export default config;
